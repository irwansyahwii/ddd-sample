export class RegisterUserAndVehicleDTO{
    public nationalId?: string;
    public passportNo?:string;
    public companyRegId?:string;
    public companyBranchId?:string;
    public companyName?:string;

    public vin:string = "";
    public licensePlate:string = "";
    public modelCode:string = "";
    public transmissionSystem:string = "";
    public marketingName:string = "";
    public marketingImageUrl:string = "";
}