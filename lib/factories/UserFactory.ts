import { IRegisterUserAndVehicleDTO, IRegisterUserDTO } from "./RegisterUserAndVehicleDTO";
import { User } from "../domain-models/User";
import { IndividualUser } from "../domain-models/IndividualUser";
import { Password } from "../domain-models/Password";
import { CorporateUser } from "../domain-models/CorporateUser";
import { DomainError } from "../domain-models/DomainError";
import { Person } from "../domain-models/Person";
import { Organization } from "../domain-models/Organization";

import Joi from "joi";
import { Domain } from "domain";

export class UserFactory{

    static CreateUserFromDTO(dto: IRegisterUserAndVehicleDTO):User{

        const schema = Joi.object().keys({
            companyBranchId: Joi.string().min(3).max(50),
            companyName: Joi.string().min(3).max(200),
            companyRegId: Joi.string().min(3).max(100),
            nationalId: Joi.string().min(3).max(20),
            passportNo: Joi.string().min(3).max(20),
            password: Joi.string().min(3).max(20).required(),
        }).xor("passportNo", "nationalId", "companyRegId");

        let result = Joi.validate(dto, schema, {allowUnknown:true});
        if (result.error){
            throw new DomainError(result.error.message);
        }

        let user:User;

        if(UserFactory.isIndividualUser(dto)){
            
            let person:Person = new Person(dto.nationalId!, dto.passportNo!);
            user = new IndividualUser(null, new Password(dto.password), false, person);

        } else if(UserFactory.isCorporateUser(dto)){
            
            let organization:Organization = new Organization(dto.companyRegId!, dto.companyName!);
            user = new CorporateUser(null, new Password(dto.password), false,  organization);

        } else{
            throw new DomainError("Failed to create user, national id or passport no or company reg id must exists");
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