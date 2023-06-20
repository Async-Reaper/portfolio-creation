import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {ContentPortfolioService} from "./content-portfolio.service";
import {ContentPortfolio} from "./content-portfolio.model";
import {CreateContentPortfolioDto} from "./dto/create-content-portfolio.dto";
import {UpdateContentPortfolioDto} from "./dto/update-content-portfolio.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@ApiTags('Контент портфолио')
@Controller('content-portfolio')
export class ContentPortfolioController {
    constructor(private contentPortfolioService: ContentPortfolioService) {}

    @ApiOperation({summary: 'Создание контента портфолио'})
    @ApiResponse({status: 200, type: CreateContentPortfolioDto})
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('img'))
    @Post()
    create(@Body() dto: CreateContentPortfolioDto, @UploadedFile() img: any ) {
        return this.contentPortfolioService.create(dto, img)
    }

    @ApiOperation({summary: 'Получение контента портфолио по id'})
    @ApiResponse({status: 200, type: CreateContentPortfolioDto})
    @Get('/:id')
    getOne(@Param('id') id: number) {
        return this.contentPortfolioService.getOne(id);
    }

    @ApiOperation({summary: 'Получение всего контента портфолио по id портфолио'})
    @ApiResponse({status: 200, type: CreateContentPortfolioDto})
    @Get('portfolio/:portfolioId')
    getAll(@Param('portfolioId') id: number) {
        return this.contentPortfolioService.getAll(id);
    }

    @ApiOperation({summary: 'Редактирование контента портфолио'})
    @ApiResponse({status: 200, type: UpdateContentPortfolioDto})
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('img'))
    @Put('/:id')
    update(@Param('id') id: number, @Body() portfolio: UpdateContentPortfolioDto, @UploadedFile() img) {
        return this.contentPortfolioService.update(id, portfolio, img);
    }

    @ApiOperation({summary: 'Удаление контента портфолио'})
    @ApiResponse({status: 200, type: null})
    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    delete(@Param('id') id: number) {
        return this.contentPortfolioService.delete(id);
    }
}
