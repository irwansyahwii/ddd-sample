import { IndividualUser } from "../domain-models/IndividualUser";
import { CorporateUser } from "../domain-models/CorporateUser";
import { User } from "../domain-models/User";
export interface IUserRepository {
    GetByNationalId(nationalId: string): Promise<IndividualUser>;
    GetByPassportNo(passportNo: string): Promise<IndividualUser>;
    GetByCompanyRegId(companyRegId: string): Promise<CorporateUser>;
    RegisterIndividualUser(user: IndividualUser): Promise<any>;
    RegisterCorporateUser(user: CorporateUser): Promise<any>;
    RegisterUser(user:User):Promise<any>;
}
