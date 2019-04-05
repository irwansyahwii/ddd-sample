import { IUserRepository } from "./IUserRepository";
import { IndividualUser } from "../domain-models/IndividualUser";
import { CorporateUser } from "../domain-models/CorporateUser";
import { User } from "../domain-models/User";
import { Domain } from "domain";
import { Tables } from "./Tables";

export class UserRepositoryUsingMemoryDB implements IUserRepository{
    RegisterUser(user: User): Promise<any> {
        user = user || null;
        if(user === null){
            throw new Error("Failed to register user, user is null");
        }

        if(user instanceof IndividualUser){
            return this.RegisterIndividualUser(user);
        }else if(user instanceof CorporateUser){
            return this.RegisterCorporateUser(user);
        }else{
            throw new Error("Unknown user instance");
        }
    }

    GetByNationalId(nationalId: string): Promise<IndividualUser> {
        let user = Tables.UserTable[1] || null;

        return Promise.resolve(user);
    }    
    
    GetByPassportNo(passportNo: string): Promise<IndividualUser> {
        let user = Tables.UserTable[1] || null;

        return Promise.resolve(user);
    }
    GetByCompanyRegId(companyRegId: string): Promise<CorporateUser> {
        let user = Tables.UserTable[1] || null;

        return Promise.resolve(user);
    }
    async RegisterIndividualUser(user: IndividualUser): Promise<any> {
        if(user.Person.IsForeigner){
            if(user.Person.PassportNo.length > 20){
                throw new Error("Passport no length must be below 20 chars");
            }
        }

        await Tables.InsertUser(user);
    }
    async RegisterCorporateUser(user: CorporateUser): Promise<any> {
        if(user.Organization.CompanyName.length > 200){
            throw new Error("Companhy name length must be below 200 chars");
        }

        await Tables.InsertUser(user);
    }


}