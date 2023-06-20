import {forwardRef, Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {PortfolioService} from "./portfolio.service";
import {PortfolioController} from "./portfolio.controller";
import {Portfolio} from "./portfolio.model";
import {User} from "../users/users.model";
import {ContentPortfolio} from "../content-portfolio/content-portfolio.model";
import {AuthModule} from "../auth/auth.module";

@Module({
    providers: [PortfolioService],
    controllers: [PortfolioController],
    imports: [
        forwardRef(() => AuthModule),
        SequelizeModule.forFeature([User, Portfolio, ContentPortfolio]),
    ]
})
export class PortfolioModule {}
