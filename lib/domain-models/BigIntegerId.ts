import { DomainError } from "./DomainError";
export class BigIntegerId {
    private _value:number;

    constructor(value: number) {
        if (value <= 0) {
            throw new DomainError("Failed to create BigIntegerId, value must be greater than zero");
        }
        this._value = value;
    }

    public get Value():number{
        return this._value;
    }
}
