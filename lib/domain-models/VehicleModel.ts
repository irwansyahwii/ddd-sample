export class VehicleModel{
    private _modelCode:string;
    private _modelName:string; 
    private _transmissionSystem:string; 
    private _marketingName:string; 
    private _marketingImageUrl:string;

    constructor(modelCode:string, modelName:string, transmissionSystem:string, 
        marketingName:string, marketingImageUrl:string){

            this._modelCode = modelCode || "";
            this._modelName = modelName || "";
            this._transmissionSystem = transmissionSystem || "";
            this._marketingName = marketingName || "";
            this._marketingImageUrl =  marketingImageUrl || "";
    }

    public get ModelCode():string{
        return this._modelCode;
    }
    public get ModelName():string{
        return this._modelName;
    }
    public get TransmissionSystem():string{
        return this._transmissionSystem;
    }
    public get MarketingName():string{
        return this._marketingName;
    }
    public get MarketingImageUrl():string{
        return this._marketingImageUrl;
    }
}