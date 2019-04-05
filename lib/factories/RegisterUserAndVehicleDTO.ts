export interface IRegisterUserDTO{
    nationalId?: string;
    passportNo?:string;
    companyRegId?:string;
    companyBranchId?:string;
    companyName?:string;
    password:string;
}

export interface IRegisterVehicleDTO{
    vin:string;
    licensePlate:string;
    modelCode:string;
    modelName:string;
    transmissionSystem:string;
    marketingName:string;
    marketingImageUrl:string;

}
export interface IRegisterUserAndVehicleDTO extends IRegisterUserDTO, IRegisterVehicleDTO{

}