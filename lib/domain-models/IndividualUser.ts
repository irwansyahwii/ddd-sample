import { UserId } from "./UserId";
import { Password } from "./Password";
import { Person } from "./Person";
import { User } from "./User";
export class IndividualUser extends User {
    private _person: Person;
    
    constructor(id: UserId | null, password: Password, isActivated: boolean, person: Person) {
        super(id, password, isActivated);
        
        this._person = person || null;
    }
    public get Person(): Person {
        return this._person;
    }
}
