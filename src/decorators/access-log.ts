import { HttpController } from "@yellow-snow/http/lib";

export function AccessLog(level: "trace" | "debug" | "info" | "log" | "wan" | "error" = "log"): any {
    return (_target: HttpController, _key: string, descriptor: PropertyDescriptor): any => {
        const method: () => void = descriptor.value;
        descriptor.value = async function(...args: any[]): Promise<any> {
            let error: any;
            let ret: any;
            try {
                ret = await method.apply(this, args);
            } catch (e) {
                error = e;
            } finally {
                const ctrl: HttpController = <HttpController>this;
                const verb: string = ctrl["req"].method;
                const path: string = ctrl["req"].path;
                const status: number = ctrl["res"].statusCode;
                const ip: string = ctrl["req"].ip;
                (console[level as keyof Console] as (...args: any[]) => void)(
                    `${level}:`, `${verb} ${path} [${status}] - ${ip}`,
                );
                if (error) {
                    throw error;
                }
                return ret;
            }
        };
    };
}
