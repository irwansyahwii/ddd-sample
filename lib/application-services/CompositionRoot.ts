import { container } from "tsyringe";
import { IUserRepository } from "../repositories/IUserRepository";
import { DependencyConstants } from "./DependencyConstants";

import { UserRepositoryUsingMemoryDB } from "../repositories/UserRepositoryUsingMemoryDB";
import { VehicleRepositoryUsingMemoryDB } from "../repositories/VehicleRepositoryUsingMemoryDB";
import { IVehicleRepository } from "../repositories/IVehicleRepository";
import { IRegisterUserAndVehicleService } from "./IRegisterUserAndVehicleService";
import { RegisterUserAndVehicleService } from "./RegisterUserAndVehicleService";

export class CompositionRoot{
    public static ComposeApplication(){
        container.register<IRegisterUserAndVehicleService>(DependencyConstants.REGISTER_USER_AND_VEHICLE_SERVICE, 
            {useClass: RegisterUserAndVehicleService});        
        container.register<IUserRepository>(DependencyConstants.USER_REPOSITORY, 
            {useClass: UserRepositoryUsingMemoryDB});
        container.register<IVehicleRepository>(DependencyConstants.VEHICLE_REPOSITORY, 
            {useClass: VehicleRepositoryUsingMemoryDB})
    }
}