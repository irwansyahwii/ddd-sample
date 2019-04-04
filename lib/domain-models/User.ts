import { UserId } from "./UserId";
import { Password } from "./Password";

export abstract class User {

    private _id: UserId;
    private _password: Password;
    private _isActivated: boolean;

    constructor(id: UserId, password:Password, isActivated:boolean){
        this._id = id || null;
        this._password = password || null;
        this._isActivated = isActivated;
    }
}

