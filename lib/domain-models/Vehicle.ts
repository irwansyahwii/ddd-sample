import { VehicleId } from "./VehicleId";
import { Vin } from "./Vin";

export class Vehicle{
    private _id: VehicleId;
    private _vin: Vin;
    private _licensePlate: string;

    constructor(id: VehicleId, vin: Vin, licensePlate:string){
        this._id = id || null;
        this._vin = vin || null;
        this._licensePlate = licensePlate || "";        
    }

    public get Id(): VehicleId{
        return this._id;
    }
    public get Vin():Vin{
        return this._vin;
    }
    public get LicensePlate():string{
        return this._licensePlate;
    }
}