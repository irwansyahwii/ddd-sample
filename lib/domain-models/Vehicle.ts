import { VehicleId } from "./VehicleId";
import { Vin } from "./Vin";
import { VehicleModel } from "./VehicleModel";
import { DomainError } from "./DomainError";

export class Vehicle{
    private _id: VehicleId | null;
    private _vin: Vin;
    private _licensePlate: string;
    private _model: VehicleModel;
    

    constructor(id: VehicleId | null, vin: Vin, licensePlate:string, model: VehicleModel){
        this._id = id || null;
        this._vin = vin || null;
        this._licensePlate = licensePlate || "";        
        this._model = model;
    }

    AssignId(id: VehicleId): any {
        id = id || null;
        if(id === null){
            throw new DomainError("Failed to assign id, id is required");
        }

        if(this._id !== null){
            throw new DomainError("Failed to assign id, vehicle already has an id");
        }

        this._id = id;
    }

    public get Id(): VehicleId | null{
        return this._id;
    }
    public get Vin():Vin{
        return this._vin;
    }
    public get LicensePlate():string{
        return this._licensePlate;
    }

    public get Model():VehicleModel{
        return this._model;
    }
}