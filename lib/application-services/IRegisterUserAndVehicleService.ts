import { RegisterUserAndVehicleDTO } from "../factories/RegisterUserAndVehicleDTO";
export interface IRegisterUserAndVehicleService {
    Run(dto: RegisterUserAndVehicleDTO): Promise<any>;
}
