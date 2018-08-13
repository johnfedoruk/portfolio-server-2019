import { Log } from "./log";
import { expect } from "chai";

class TestClass {
    @Log()
    public testSyncMethod(str: string): string {
        return str.split("").reverse().join("");
    }
    @Log()
    public async testAsyncMethod(str: string): Promise<string> {
        return str.split("").reverse().join("");
    }
    @Log()
    public async testThrowingMethod(): Promise<never> {
        throw new Error('');
    }
    @Log()
    public async testDefaultLevel(): Promise<void> {
        return;
    }
    @Log("trace")
    public async testOverriddenLevel(): Promise<void> {
        return;
    }
}

let test: TestClass;

const trace = console.trace;
const info = console.info;
const debug = console.debug;
const log = console.log;
const warn = console.warn;
const error = console.error;

const noop = (..._args: any[]) => null;

function removeConsoleProps() {
    console.trace = noop;
    console.info = noop;
    console.debug = noop;
    console.log = noop;
    console.warn = noop;
    console.error = noop;
}

function restoreConsoleProps() {
    console.trace = trace;
    console.info = info;
    console.debug = debug;
    console.log = log;
    console.warn = warn;
    console.error = error;
}

describe('@Log', () => {
    before(()=>{

    });
    after(()=>{

    });
    beforeEach(()=>{
        test = new TestClass();
    });
    it('should handle sync method input/output', async () => {
        const input = 'Hello world';
        removeConsoleProps();
        const output = await test.testSyncMethod(input);
        restoreConsoleProps();
        expect(output).to.equal(input.split('').reverse().join(''));
    });
    it('should handle async method input/output', async () => {
        const input = 'Hello world';
        removeConsoleProps();
        const output = await test.testAsyncMethod(input);
        restoreConsoleProps();
        expect(input).to.equal(output.split('').reverse().join(''));
    });
    it('should let errors fall through', (done) => {
        removeConsoleProps();
        test.testThrowingMethod().then(
            () => {
                restoreConsoleProps();
            }
        ).catch(
            () => {
                restoreConsoleProps();
                done();
            }
        );
    });
    it('should let errors fall through', (done) => {
        removeConsoleProps();
        test.testThrowingMethod().then(
            () => {
                restoreConsoleProps();
            }
        ).catch(
            () => {
                restoreConsoleProps();
                done();
            }
        );
    });
    it('should log with debug level by default', (done) => {
        let exited: boolean = false;
        removeConsoleProps();
        console['debug'] = () => {
            if (!exited) {
                exited = true;
                done();
            }
        }
        test.testDefaultLevel().then(
            () => restoreConsoleProps(),
        ).catch(
            () => restoreConsoleProps(),
        );
    });
    it('should log with overridden level', (done) => {
        let exited: boolean = false;
        removeConsoleProps();
        console['trace'] = () => {
            if (!exited) {
                exited = true;
                done();
            }
        }
        test.testOverriddenLevel().then(
            () => restoreConsoleProps(),
        ).catch(
            () => restoreConsoleProps(),
        );
    });
});
