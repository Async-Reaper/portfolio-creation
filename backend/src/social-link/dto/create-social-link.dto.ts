import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsInt, IsNumber, IsString} from "class-validator";

export class CreateSocialLinkDto {
    @ApiProperty({example: 'link2.com', description: 'Ссылка на соц сеть'})
    @IsString({message: 'Должно быть строкой'})
    readonly link: string;

    @ApiProperty({example: '1', description: 'Id пользователя'})
    @IsInt(  {message: 'Должно быть числом'})
    readonly userId: number;
}
