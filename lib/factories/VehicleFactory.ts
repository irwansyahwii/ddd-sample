import { IRegisterUserAndVehicleDTO } from "./RegisterUserAndVehicleDTO";
import { Vehicle } from "../domain-models/Vehicle";
import { Vin } from "../domain-models/Vin";
import { DomainError } from "../domain-models/DomainError";
import { VehicleModel } from "../domain-models/VehicleModel";
import Joi from "joi";

export class VehicleFactory{
    static CreateVehicleFromRegistrationDTO(dto:IRegisterUserAndVehicleDTO):Vehicle{
        const schema = Joi.object().keys({
            licensePlate: Joi.string().min(2).max(8),
            marketingImageUrl: Joi.string().min(2).max(255),
            marketingName: Joi.string().min(3).max(100),
            modelCode: Joi.string().min(3).max(20).required(),
            modelName: Joi.string().min(3).max(100),
            transmissionSystem: Joi.string().min(3).max(20).required(),
            vin: Joi.string().min(3).max(50).required(),
        });

        let result = Joi.validate(dto, schema, {allowUnknown:true});
        if (result.error){
            throw new DomainError(result.error.message);
        }
        
        dto.vin = dto.vin || "";
        if(dto.vin.trim().length <= 0){
            throw new DomainError("Failed to create vehicle, vin is required");
        }
        
        dto.licensePlate = dto.licensePlate || "";
        if(dto.licensePlate.trim().length <= 0){
            throw new DomainError("Failed to create vehicle, license plate is required");
        }
        
        dto.modelCode = dto.modelCode || "";
        if(dto.modelCode.trim().length <= 0){
            throw new DomainError("Failed to create vehicle model, model code is required");
        }

        dto.modelName = dto.modelName || "";
        if(dto.modelName.trim().length <= 0){
            throw new DomainError("Failed to create vehicle model, model name is required");
        }

        dto.transmissionSystem = dto.transmissionSystem || "";
        if(dto.transmissionSystem.trim().length <= 0){
            throw new DomainError("Failed to create vehicle model, transmission system is required");
        }

        dto.marketingName = dto.marketingName || "";
        if(dto.marketingName.trim().length <= 0){
            throw new DomainError("Failed to create vehicle model, marketing name is required");
        }
        
        let vehicleModel = new VehicleModel(dto.modelCode, dto.modelName, dto.transmissionSystem,
                                dto.marketingName, dto.marketingImageUrl);
        let vehicle = new Vehicle(null, new Vin(dto.vin), dto.licensePlate, vehicleModel);
        
        return vehicle;
    }
}