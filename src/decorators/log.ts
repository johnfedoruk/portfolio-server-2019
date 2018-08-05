export function Log(level: "trace" | "debug" | "info" | "log" | "wan" | "error" = "debug"): any {
    return (target: any, key: string, descriptor: PropertyDescriptor): any => {
        const method: () => void = descriptor.value;
        descriptor.value = async function (...args: any[]): Promise<any> {
            const class_method: string = `${target.constructor.name}.${key}(...)`;
            try {
                (<Function>console[<keyof Console>level])(`${level}:`,`Entering method ${class_method}`);
                const ret: any = await method.apply(this, args);
                (<Function>console[<keyof Console>level])(`${level}:`,`Exiting method ${class_method}`);
                return ret;
            } catch (e) {
                console.error('error:',`Failed to exit ${class_method}`);
                console.error(e);
                throw e;
            }
        };
    };
}
