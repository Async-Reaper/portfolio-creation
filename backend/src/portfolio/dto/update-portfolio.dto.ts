import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class UpdatePortfolioDto {
    @ApiProperty({example: 'title', description: 'Название портфолио'})
    @IsString({message: 'Должно быть строкой'})
    readonly title: string;

    @ApiProperty({example: 'description', description: 'Описание портфолио'})
    @IsString({message: 'Должно быть строкой'})
    readonly description: string;
}
