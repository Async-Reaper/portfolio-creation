import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersModule} from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import {FilesModule} from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';
import {PortfolioModule} from './portfolio/portfolio.module';
import {ContentPortfolio} from "./content-portfolio/content-portfolio.model";
import {Portfolio} from "./portfolio/portfolio.model";
import {ContentPortfolioModule} from "./content-portfolio/content-portfolio.module";
import {AuthModule} from "./auth/auth.module";
import { SocialLinkModule } from './social-link/social-link.module';
import {SocialLink} from "./social-link/social-link.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
           envFilePath: `.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve( __dirname, 'static'),
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Portfolio, ContentPortfolio, SocialLink],
            autoLoadModels: true
        }),
        UsersModule,
        SocialLinkModule,
        FilesModule,
        AuthModule,
        ContentPortfolioModule,
        PortfolioModule,
        SocialLinkModule,
    ]
})
export class AppModule {}
