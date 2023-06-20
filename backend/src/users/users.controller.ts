import {Body, Controller, Get, Param, Post, Put, Req, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {ChangeEmailDto} from "./dto/change-email.dto";
import {ChangePasswordDto} from "./dto/change-password.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService,) {}

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: 'Получить всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }


    @ApiOperation({summary: 'Получить пользователя по id'})
    @ApiResponse({status: 200, type: [User]})
    @Get('/user')
    getOne(@Req() request: Request) {
        return this.usersService.getUserById(request);
    }

    @ApiOperation({summary: 'Получить одного пользователя по id'})
    @ApiResponse({status: 200, type: [User]})
    @Get('/:id')
    getOneId(@Param('id') id: number) {
        return this.usersService.getOneUserById(id);
    }

    @ApiOperation({summary: 'Смена почты'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Put('/change-email')
    changeEmail(@Req() request: Request, @Body() newEmail: ChangeEmailDto) {
        return this.usersService.changeEmail(request, newEmail);
    }

    @ApiOperation({summary: 'Смена пароля'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Put('/change-password')
    changePassword(@Req() request: Request, @Body() newPassword: ChangePasswordDto) {
        return this.usersService.changePassword(request, newPassword);
    }

    @ApiOperation({summary: 'Загрузка аватарки'})
    @ApiResponse({status: 200, type: [User]})
    @Post('upload-avatar')
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('avatar'))
    uploadAvatar(@Req() request: Request, @UploadedFile() image) {
        return this.usersService.uploadAvatar(request, image);
    }

    @ApiOperation({summary: 'Удаление аватарки'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Put('delete-avatar/:id')
    deleteAvatar(@Param('id') id: number) {
        return this.usersService.deleteAvatar(id);
    }

}
