import { Vehicle } from "../domain-models/Vehicle";
import { IVehicleRepository } from "./IVehicleRepository";
export class VehicleRepositoryUsingMemoryDB implements IVehicleRepository {
    GetByVin(vin: string): Promise<Vehicle> {
        throw new Error("Method not implemented.");
    }
    Create(vehicle: Vehicle): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
