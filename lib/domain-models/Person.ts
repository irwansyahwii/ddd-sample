export class Person {
    private _nationalId: string;
    private _passportNo: string;
    constructor(nationalId: string, passportNo: string) {
        this._nationalId = nationalId || "";
        this._passportNo = passportNo || "";
    }
    public get NationalId(): string {
        return this._nationalId;
    }
    public get PassportNo(): string {
        return this._passportNo;
    }
}
