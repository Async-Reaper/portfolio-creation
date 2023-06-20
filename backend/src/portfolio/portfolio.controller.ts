import {Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {PortfolioService} from "./portfolio.service";
import {CreatePortfolioDto} from "./dto/create-portfolio.dto";
import {Portfolio} from "./portfolio.model";
import {UpdatePortfolioDto} from "./dto/update-portfolio.dto";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";


@ApiTags('Портфолио')
@Controller('portfolio')
export class PortfolioController {
    constructor(private portfolioService: PortfolioService) {}

    @ApiOperation({summary: 'Создание портфолио'})
    @ApiResponse({status: 200, type: Portfolio})
    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() portfolioDto: CreatePortfolioDto, @Req() request: Request) {
        return this.portfolioService.createPortfolio(portfolioDto, request);
    }

    @ApiOperation({summary: 'Редактирование портфолио'})
    @ApiResponse({status: 200, type: Portfolio})
    @Put('/:portfolioId')
    @UseGuards(JwtAuthGuard)
    update(@Param('portfolioId') id: number, @Body() portfolio: UpdatePortfolioDto, @Req() request: Request) {
        return this.portfolioService.updatePortfolio(id, portfolio, request);
    }

    @ApiOperation({summary: 'Удаление портфолио'})
    @ApiResponse({status: 200, type: Portfolio})
    @Delete('/:portfolioId')
    @UseGuards(JwtAuthGuard)
    delete(@Param('portfolioId') id: number) {
        return this.portfolioService.deletePortfolio(id);
    }


    @ApiOperation({summary: 'Получение всех портфолио для авторизованного пользователя'})
    @ApiResponse({status: 200, type: Portfolio})
    @Get('/user')
    getAllAuthPortUser(@Req() request: Request) {
        return this.portfolioService.getAllPortAuthUser(request);
    }

    @ApiOperation({summary: 'Получение всех портфолио для неавторизованного пользователя'})
    @ApiResponse({status: 200, type: Portfolio})
    @Get('/:portfolioId')
    getAllPortNoAuthUser(@Param('portfolioId') id: number) {
        return this.portfolioService.getAllPortNoAuthUser(id);
    }

    @ApiOperation({summary: 'Получение всех портфолио'})
    @ApiResponse({status: 200, type: Portfolio})
    @Get('')
    getAll() {
        return this.portfolioService.getAll();
    }

    @ApiOperation({summary: 'Получение портфолио по id'})
    @ApiResponse({status: 200, type: Portfolio})
    @Get('portfolio/:portfolioId')
    getOne(@Param('portfolioId') id: number) {
        return this.portfolioService.getOne(id);
    }
}
