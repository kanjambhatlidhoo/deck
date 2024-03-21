export class Response {
    key: any;
    value: any;

    public constructor (key: any, value: any) {
        this.key = key;
        this.value = value;
    }

    public getKey(): any {
        return this.key;
    }

    public setKey(key: any): void {
        this.key = key;
    }

    public getValue(value: any): any {
        return this.value;
    }

    public setValue(value: any): any {
        this.value = value;
    }
}