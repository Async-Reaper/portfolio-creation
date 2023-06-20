import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {SocialLink} from "./social-link.model";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class SocialLinkService {

    constructor(@InjectModel(SocialLink) private socialLinkRepository: typeof SocialLink,
                private jwtService: JwtService) {
    }

    async getAllSocialLink(userId: number) {
        const socialLink = await this.socialLinkRepository.findAll({where: {userId}});
        return socialLink
    }

    async addSocialLink(request, dto) {

        const token = request.headers['authorization'];

        if (this.jwtService.verify(token)) {
            const decodeToken: any = this.jwtService.decode(token);
            const userId: number = Number(decodeToken.id)

            if (userId == dto.userId) {
                const socialLink = await this.socialLinkRepository.create(dto);
                await socialLink.save();
                return socialLink;
            } else {
                throw new HttpException({message: 'Левый пользователь'}, HttpStatus.FORBIDDEN)
            }
        } else {
            throw new HttpException({message: 'no such token'}, HttpStatus.FORBIDDEN)
        }


    }

    async deleteSocialLink(id: number, request: Request) {
        const token = request.headers['authorization'];

        if (this.jwtService.verify(token)) {
            const decodeToken: any = this.jwtService.decode(token);
            const userId: number = Number(decodeToken.id)

            const socialLink = await this.socialLinkRepository.findOne({where: {id}})

            if (userId == socialLink.userId) {
                await this.socialLinkRepository.destroy({where: {id}});
                return {message: 'Ссылка успешно удалена'}
            } else {
                throw new HttpException({message: 'Левый пользователь'}, HttpStatus.FORBIDDEN)
            }
        } else {
            throw new HttpException({message: 'no such token'}, HttpStatus.FORBIDDEN)
        }

    }
}
