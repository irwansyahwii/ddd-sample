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

    async Run(dto: RegisterUserAndVehicleDTO):Promise<any>{

            let user:User;

            if(dto.companyRegId){
                user = await this.userRepo.GetByCompanyRegId(dto.companyRegId);
            }else if(dto.nationalId){
                user = await this.userRepo.GetByNationalId(dto.nationalId);
            }else if(dto.passportNo){
                user = await this.userRepo.GetByPassportNo(dto.passportNo);
            }else{
                throw new DomainError("Failed to register user and vehicle. Either company reg id or national id or passport no is required");
            }
    
            if(!user){
                user = UserFactory.CreateUserFromDTO(dto)
                await this.userRepo.RegisterUser(user);                    
            }
            let vehicle = VehicleFactory.CreateVehicleFromRegistrationDTO(dto);
    
            await this.vehicleRepo.Create(vehicle);
                
    }
}