import { DomainError } from "./DomainError";
export class Password {
    private _value: string;
    constructor(value: string) {
        this._value = value || "";
        let length = this._value.trim().length;
        if (length <= 0) {
            throw new DomainError("Failed to create Password, value is required");
        }
        if (length < 6 || length > 30) {
            throw new DomainError("Failed to create Password, length must be between 6 and 30 characters");
        }
    }
}
