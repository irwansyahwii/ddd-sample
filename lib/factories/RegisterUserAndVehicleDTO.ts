export interface IRegisterUserAndVehicleDTO{
    nationalId?: string;
    passportNo?:string;
    companyRegId?:string;
    companyBranchId?:string;
    companyName?:string;
    password:string;

    vin:string;
    licensePlate:string;
    modelCode:string;
    modelName:string;
    transmissionSystem:string;
    marketingName:string;
    marketingImageUrl:string;
}