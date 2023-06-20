import {forwardRef, Module} from '@nestjs/common';
import {SocialLinkService} from './social-link.service';
import {SocialLinkController} from './social-link.controller';
import {AuthModule} from "../auth/auth.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {SocialLink} from "./social-link.model";

@Module({
  providers: [SocialLinkService],
  controllers: [SocialLinkController],
  imports: [
    forwardRef(() => AuthModule),
    SequelizeModule.forFeature([User, SocialLink]),
  ]
})
export class SocialLinkModule {}
