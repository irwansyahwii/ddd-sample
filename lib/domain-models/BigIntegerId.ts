import { DomainError } from "./DomainError";
export class BigIntegerId {
    constructor(value: number) {
        if (value <= 0) {
            throw new DomainError("Failed to create BigIntegerId, value must be greater than zero");
        }
    }
}
