export class Organization {
    private _companyRegiId: string;
    private _companyName: string;
    constructor(companyRegId: string, companyName: string) {
        this._companyRegiId = companyRegId || "";
        this._companyName = companyName || "";
    }
    public get CompanyRegId(): string {
        return this._companyRegiId;
    }
    public get CompanyName(): string {
        return this._companyName;
    }
}
