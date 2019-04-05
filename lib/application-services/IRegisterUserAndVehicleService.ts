import { IRegisterUserAndVehicleDTO } from "../factories/RegisterUserAndVehicleDTO";
export interface IRegisterUserAndVehicleService {
    Run(dto: IRegisterUserAndVehicleDTO): Promise<any>;
}
