import {forwardRef, Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {ContentPortfolioService} from "./content-portfolio.service";
import {ContentPortfolioController} from "./content-portfolio.controller";
import {Portfolio} from "../portfolio/portfolio.model";
import {ContentPortfolio} from "./content-portfolio.model";
import {FilesModule} from "../files/files.module";
import {AuthModule} from "../auth/auth.module";

@Module({
    providers: [ContentPortfolioService],
    controllers: [ContentPortfolioController],
    imports: [
        forwardRef(() => AuthModule),
        SequelizeModule.forFeature([Portfolio, ContentPortfolio]),
        FilesModule
    ],
    exports: [
        ContentPortfolioService
    ]
})

export class ContentPortfolioModule {}

