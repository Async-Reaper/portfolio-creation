import {Body, Controller, Delete, Get, Param, Post, Req, UseGuards} from '@nestjs/common';
import {SocialLinkService} from "./social-link.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {CreateSocialLinkDto} from "./dto/create-social-link.dto";
import {SocialLink} from "./social-link.model";

@ApiTags('Ссылки на соц. сети')
@Controller('social-link')
export class SocialLinkController {
    constructor(private socialLinkService: SocialLinkService) {}

    @ApiOperation({summary: 'Добавление ссылки на соц. сеть'})
    @ApiResponse({status: 200, type: "Ссылка добавлена"})
    @UseGuards(JwtAuthGuard)
    @Post()
    addSocialLink(@Body() dto: CreateSocialLinkDto, @Req() request: Request) {
        return this.socialLinkService.addSocialLink(request, dto);
    }

    @ApiOperation({summary: 'Получение ссылки на соц. сеть'})
    @ApiResponse({status: 200, type: SocialLink})
    @Get('/:id')
    getAll(@Param('id') id: number) {
        return this.socialLinkService.getAllSocialLink(id);
    }

    @ApiOperation({summary: 'Удаление ссылки на соц. сеть'})
    @ApiResponse({status: 200, type: "Ссылка удалена"})
    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    deleteSocialLink(@Param('id') id: number, @Req() request: Request) {
        return this.socialLinkService.deleteSocialLink(id, request);
    }
}
