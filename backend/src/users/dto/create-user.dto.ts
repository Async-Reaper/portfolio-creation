import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    readonly email: string;
    readonly password: string;
    readonly full_name: string;
}
