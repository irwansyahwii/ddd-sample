import { UserId } from "./UserId";
import { Password } from "./Password";
import { DomainError } from "./DomainError";

export abstract class User {

    private _id: UserId | null;
    private _password: Password;
    private _isActivated: boolean;

    constructor(id: UserId | null, password:Password, isActivated:boolean){
        this._id = id || null;
        this._password = password || null;
        this._isActivated = isActivated;
    }

    public get Id():UserId | null{
        return this._id;
    }

    public AssignId(id:UserId){
        id = id || null;
        if(id === null){
            throw new DomainError("Failed to assign id, id must not null");
        }
        if(this._id !== null){
            throw new DomainError("Failed to assign id, user already has an id");
        }
        this._id = id;
    }

    public get Password():Password{
        return this._password;
    }

    public get IsActivated():boolean{
        return this._isActivated;
    }
}

