import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class UpdateContentPortfolioDto {
    @ApiProperty({example: 'ava.jpg', description: 'Изображение'})
    readonly img: string;

    @ApiProperty({example: 'Какое-то описание...', description: 'Описание изображение'})
    @IsString({message: 'Должно быть строкой'})
    readonly description: string;
}
