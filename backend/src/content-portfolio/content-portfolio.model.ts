import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Portfolio} from "../portfolio/portfolio.model";

interface ContentPortfolioCreationAttrs {
    img: string;
    description: string;
}

@Table({tableName: 'content-portfolio', createdAt: false, updatedAt: false})
export class ContentPortfolio extends Model<ContentPortfolio, ContentPortfolioCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ava.jpg', description: 'Изображение'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    img: string;

    @ApiProperty({example: 'Какое-то описание....', description: 'Описание'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @ForeignKey(() => Portfolio)
    @Column({type: DataType.INTEGER})
    portfolioId: number;

    @BelongsTo(() => Portfolio)
    portfolioParent: Portfolio;
}
