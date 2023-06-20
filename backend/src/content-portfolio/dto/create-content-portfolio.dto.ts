import {ApiProperty} from "@nestjs/swagger";
import {IsInt, IsString} from "class-validator";

export class CreateContentPortfolioDto {
    @ApiProperty({example: 'ava.jpg', description: 'Изображение'})
    // @IsSta({message: 'Должно быть строкой'})
    readonly img: string;

    @ApiProperty({example: 'Какое-то описание...', description: 'Описание изображение'})
    @IsString({message: 'Должно быть строкой'})
    readonly description: string;

    @ApiProperty({example: '1', description: 'Id портфолио'})
    // @IsInt({message: 'Должно быть число'})
    readonly portfolioId: number
}
