import { User } from "./User";
import { Organization } from "./Organization";
import { UserId } from "./UserId";
import { Password } from "./Password";


export class CorporateUser extends User{
    private _organization: Organization;

    constructor(id: UserId, password: Password, isActivated: boolean, organization: Organization) {
        super(id, password, isActivated);
        this._organization = organization || null;
    }

    public get Organization():Organization{
        return this._organization;
    }
}