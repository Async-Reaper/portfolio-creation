import {forwardRef, Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {AuthModule} from "../auth/auth.module";
import {Portfolio} from "../portfolio/portfolio.model";
import {FilesModule} from "../files/files.module";
import {SocialLink} from "../social-link/social-link.model";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
      SequelizeModule.forFeature([User, Portfolio, SocialLink]),
      FilesModule,
      forwardRef(() => AuthModule),
  ],
    exports: [
        UsersService,
    ]
})
export class UsersModule {}
