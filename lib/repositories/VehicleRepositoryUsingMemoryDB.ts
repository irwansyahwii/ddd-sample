import { Vehicle } from "../domain-models/Vehicle";
import { IVehicleRepository } from "./IVehicleRepository";
import { Tables } from "./Tables";
export class VehicleRepositoryUsingMemoryDB implements IVehicleRepository {
    GetByVin(vin: string): Promise<Vehicle> {
        let existing = Tables.VehicleTable[1] || null;

        return existing;
    }
    Create(vehicle: Vehicle): Promise<any> {
        Tables.InsertVehicle(vehicle);

        return Promise.resolve();
    }
}
