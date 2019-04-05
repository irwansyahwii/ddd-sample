import { DomainError } from "./DomainError";

export class Organization {
    private _companyRegiId: string;
    private _companyName: string;
    constructor(companyRegId: string, companyName: string) {
        this._companyRegiId = companyRegId || "";
        this._companyName = companyName || "";

        if(this._companyRegiId.trim().length <= 0){
            throw new DomainError("Failed to create organization, company reg id is required");            
        }

        if(this._companyName.trim().length <= 0){
            throw new DomainError("Failed to create organization, company name is required");
        }
    }
    public get CompanyRegId(): string {
        return this._companyRegiId;
    }
    public get CompanyName(): string {
        return this._companyName;
    }
}
