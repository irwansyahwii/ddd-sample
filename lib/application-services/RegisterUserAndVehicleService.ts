import { RegisterUserAndVehicleDTO } from "../factories/RegisterUserAndVehicleDTO";
import { IRegisterUserAndVehicleService } from "./IRegisterUserAndVehicleService";
import { IUserRepository } from "../repositories/IUserRepository";
import { User } from "../domain-models/User";
import { CorporateUser } from "../domain-models/CorporateUser";
import { DomainError } from "../domain-models/DomainError";
import { UserFactory } from "../factories/UserFactory";
import { VehicleFactory } from "../factories/VehicleFactory";
import { IVehicleRepository } from "../repositories/IVehicleRepository";
import { injectable, inject } from "tsyringe";
import { DependencyConstants } from "./DependencyConstants";

@injectable()
export class RegisterUserAndVehicleService implements IRegisterUserAndVehicleService{

    constructor(@inject(DependencyConstants.USER_REPOSITORY) protected userRepo:IUserRepository, 
                @inject(DependencyConstants.VEHICLE_REPOSITORY) protected vehicleRepo: IVehicleRepository){

    }

    Run(dto: RegisterUserAndVehicleDTO):Promise<any>{
        let searchUser:Promise<User>;

        if(dto.companyRegId){
            searchUser = this.userRepo.GetByCompanyRegId(dto.companyRegId);
        }else if(dto.nationalId){
            searchUser = this.userRepo.GetByNationalId(dto.nationalId);
        }else if(dto.passportNo){
            searchUser = this.userRepo.GetByPassportNo(dto.passportNo);
        }else{
            throw new DomainError("Failed to register user and vehicle. Either company reg id or national id or passport no is required");
        }

        return searchUser
            .then((user:User) => {
                if(!user){
                    user = UserFactory.CreateUserFromDTO(dto)
                    return this.userRepo.RegisterUser(user);                    
                }else{
                    return Promise.resolve(user);
                }
            })
            .then((user:User) => {
                let vehicle = VehicleFactory.CreateVehicleFromRegistrationDTO(dto);

                return this.vehicleRepo.Create(vehicle);
            })
            .catch((err:any) => {
                throw err;
            })
    }
}