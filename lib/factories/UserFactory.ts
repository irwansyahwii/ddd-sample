import { IRegisterUserAndVehicleDTO } from "./RegisterUserAndVehicleDTO";
import { User } from "../domain-models/User";
import { IndividualUser } from "../domain-models/IndividualUser";
import { Password } from "../domain-models/Password";
import { CorporateUser } from "../domain-models/CorporateUser";
import { DomainError } from "../domain-models/DomainError";
import { Person } from "../domain-models/Person";
import { Organization } from "../domain-models/Organization";

export class UserFactory{

    static CreateUserFromDTO(dto: IRegisterUserAndVehicleDTO):User{
        
        let user:User;

        if(UserFactory.isIndividualUser(dto)){
            
            let person:Person = new Person(dto.nationalId!, dto.passportNo!);
            user = new IndividualUser(null, new Password(dto.password), false, person);

        } else if(UserFactory.isCorporateUser(dto)){
            
            let organization:Organization = new Organization(dto.companyRegId!, dto.companyName!);
            user = new CorporateUser(null, new Password(dto.password), false,  organization);

        } else{
            throw new DomainError("Failed to create user, national id or passport not or company reg id must exists");
        }
        
        return user;
    }

    static isCorporateUser(dto:IRegisterUserAndVehicleDTO):boolean{
        dto.companyRegId = dto.companyRegId || "";

        return dto.companyRegId!.length > 0;
    }

    static isIndividualUser(dto:IRegisterUserAndVehicleDTO):boolean{
        dto.nationalId = dto.nationalId || "";
        dto.passportNo = dto.passportNo || "";
        
        return (dto.nationalId!.length > 0 || dto.passportNo!.length > 0);
    }

}