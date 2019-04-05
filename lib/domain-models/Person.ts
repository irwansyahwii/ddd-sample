import { DomainError } from "./DomainError";

export class Person {
    private _nationalId: string;
    private _passportNo: string;
    constructor(nationalId: string, passportNo: string) {
        this._nationalId = nationalId || "";
        this._nationalId = this._nationalId.trim();
        this._passportNo = passportNo || "";
        this._passportNo = this._passportNo.trim();

        if(this._nationalId.trim().length <= 0 && this._passportNo.trim().length <= 0){
            throw new DomainError("Failed to create person, either national id or passport no must exists");
        }
    }
    public get NationalId(): string {
        return this._nationalId;
    }
    public get PassportNo(): string {
        return this._passportNo;
    }

    public get IsForeigner():boolean{
        return this._passportNo.length > 0;
    }
}
