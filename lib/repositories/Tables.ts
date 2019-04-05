import { User } from "../domain-models/User";
import { UserId } from "../domain-models/UserId";
import { Vehicle } from "../domain-models/Vehicle";
import { VehicleId } from "../domain-models/VehicleId";

export class Tables{
    public static userIdIncrement:number = 0;
    public static UserTable:any = {};

    public static vehicleIdIncrement:number = 0;
    public static VehicleTable:any = {};

    public static InsertUser(user:User):Promise<any>{
        if(user.Id === null){
            this.userIdIncrement++;
            user.AssignId(new UserId(this.userIdIncrement));
        }
        this.UserTable[user.Id!.Value] = user;

        return Promise.resolve();
    }
    public static InsertVehicle(vehicle: Vehicle):Promise<any>{
        if(vehicle.Id === null){
            this.vehicleIdIncrement++;
            vehicle.AssignId(new VehicleId(this.vehicleIdIncrement));
        }
        this.VehicleTable[vehicle.Id!.Value] = vehicle;

        return Promise.resolve();
    }
}