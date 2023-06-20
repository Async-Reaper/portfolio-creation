import {ApiProperty} from "@nestjs/swagger";
import {IsInt, IsString} from "class-validator";

export class CreatePortfolioDto {
    @ApiProperty({example: 'title', description: 'Название портфолио'})
    @IsString({message: 'Должно быть строкой'})
    readonly title: string;

    @ApiProperty({example: 'description', description: 'Описание портфолио'})
    @IsString({message: 'Должно быть строкой'})
    readonly description: string;

    @ApiProperty({example: '1', description: 'Id пользователя'})
    @IsInt({message: 'Должно быть число'})
    readonly userId: number;
}
