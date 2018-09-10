
import { HttpController } from "@yellow-snow/http/lib";
import * as LRU from "lru-cache";
import { Injector } from "../../node_modules/tsnode-di/lib";

class RateLimitLRU extends LRU<string, LRU.Cache<string, number>> { }

export function RateLimit(max_count: number, ttl: number, max_lru_size?: number): any {
    return (target: HttpController, key: string, descriptor: PropertyDescriptor): any => {
        const system_rules: RateLimitLRU = Injector.resolve<RateLimitLRU>(RateLimitLRU);
        const method: () => void = descriptor.value;
        descriptor.value = async function(...args: any[]): Promise<any> {
            const system_key: string = `${target}.${key}`;
            let method_rules: LRU.Cache<string, number> | undefined = system_rules.get(system_key);
            if (method_rules === undefined) {
                method_rules = new LRU<string, number>({
                    max: max_lru_size,
                    maxAge: ttl,
                });
                system_rules.set(system_key, method_rules);
            }
            const ctrl: HttpController = this as HttpController;
            // tslint:disable-next-line
            const ip: string = ctrl["req"].ip;
            let count = method_rules.get(ip) || 0;
            count++;
            method_rules.set(ip, count);
            if (count <= max_count) {
                let error: any;
                let ret: any;
                try {
                    ret = await method.apply(this, args);
                } catch (e) {
                    error = e;
                } finally {
                    if (error) {
                        // tslint:disable-next-line
                        throw error;
                    }
                    // tslint:disable-next-line
                    return ret;
                }
            } else {
                // tslint:disable-next-line
                ctrl["res"].sendStatus(429);
            }
        };
    };
}
