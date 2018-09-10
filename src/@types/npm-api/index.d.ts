interface View {
    new(name: string): this;
    query(params): Promise<any[]>
    stream(params): Stream;
    url(params): string;
}

interface List {
    new(name: string, view: View): this;
    query(params: any): Promise<any>;
    url(params: any): Promise<any>;
}

interface Repo {
    new(name: string, store?: any): this;
    package(version?: string): Promise<any>;
    version(version: string): Promise<any>;
    dependencies(version?: string): Promise<any>;
    devDependencies(version?: string): Promise<any>;
    prop(prop: string, version?: string): Promise<any>;
}

interface Maintainer {
    new(name: string, store?: any): this;
    repos(): Promise<any[]>;
}

interface NpmApi {
    new(config?: any): NpmApi;
    view(name: string): Promise<View>;
    list(name: string, view: string | View): Promise<List>;
    repo(name: string): Promise<Repo>;
    maintainer(name: string): Promise<Maintainer>;
}

declare const NpmApi: NpmApi;

declare module 'npm-api' {
    export = NpmApi;
}
