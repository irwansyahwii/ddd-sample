import { RegisterUserAndVehicleDTO } from "./RegisterUserAndVehicleDTO";
import { Vehicle } from "../domain-models/Vehicle";

export class VehicleFactory{
    static CreateVehicleFromRegistrationDTO(dto:RegisterUserAndVehicleDTO):Vehicle{
        throw new Error("");
    }
}