export class Vin {
    private _value: string;
    constructor(value: string) {
        this._value = value || "";
    }
    public get Value(): string {
        return this._value;
    }
}
