import { IUserRepository } from "./IUserRepository";
import { IndividualUser } from "../domain-models/IndividualUser";
import { CorporateUser } from "../domain-models/CorporateUser";

export class UserRepositoryUsingMemoryDB implements IUserRepository{
    RegisterUser(user: import("../domain-models/User").User): Promise<any> {
        throw new Error("Method not implemented.");
    }

    GetByNationalId(nationalId: string): Promise<IndividualUser> {
        throw new Error("Method not implemented.");
    }    
    
    GetByPassportNo(passportNo: string): Promise<IndividualUser> {
        throw new Error("Method not implemented.");
    }
    GetByCompanyRegId(companyRegId: string): Promise<CorporateUser> {
        throw new Error("Method not implemented.");
    }
    RegisterIndividualUser(user: IndividualUser): Promise<any> {
        throw new Error("Method not implemented.");
    }
    RegisterCorporateUser(user: CorporateUser): Promise<any> {
        throw new Error("Method not implemented.");
    }


}