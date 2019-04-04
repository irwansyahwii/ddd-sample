import { Vehicle } from "../domain-models/Vehicle";

export interface IVehicleRepository{
    GetByVin(vin:string):Promise<Vehicle>;
    Create(vehicle:Vehicle):Promise<any>;
}

