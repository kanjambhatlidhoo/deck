export class Response {
    key: any;
    value: any;

    public constructor (key: any, value: any) {
        this.key = key;
        this.value = value;
    }

    private getKey(): any {
        return this.key;
    }

    private setKey(key: any): void {
        this.key = key;
    }

    private getValue(value: any): any {
        return this.value;
    }

    private setValue(value: any): any {
        this.value = value;
    }
}