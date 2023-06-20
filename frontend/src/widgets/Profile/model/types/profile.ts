import {type User} from "entities/User";

export interface ProfileType extends User {

}

export interface ProfileSchema {
    data?: ProfileType;
    isLoading: boolean;
    error: string;
}
