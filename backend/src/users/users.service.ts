import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {User} from "./users.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateUserDto} from "./dto/create-user.dto";
import {ChangeEmailDto} from "./dto/change-email.dto";
import {ChangePasswordDto} from "./dto/change-password.dto";
import {FilesService} from "../files/files.service";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                private fileService: FilesService,
                private jwtService: JwtService) {
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        return user;
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}});
        return users;
    }

    async getUserById(request: Request) {

        const token = request.headers['authorization'];

        if (this.jwtService.verify(token)) {
            const decodeToken: any = this.jwtService.decode(token);
            const id: number = Number(decodeToken.id)
            const user = await this.userRepository.findOne({where: {id}})
            return user
        } else {
            throw new HttpException({message: 'no such token'}, HttpStatus.FORBIDDEN)
        }
    }

    async getOneUserById(id: number) {
        const user = await this.userRepository.findOne({where: {id}})
        return user
    }

    async changeEmail(request: Request, dto: ChangeEmailDto) {
        const token = request.headers['authorization'];

        if (this.jwtService.verify(token)) {
            const decodeToken: any = this.jwtService.decode(token);
            const id: number = Number(decodeToken.id)
            const user = await this.userRepository.findOne({where: {id}})

            if (user.email === dto.newEmail) {
                throw new HttpException({
                    message: 'Пользователь с таким адресом почты уже существует'
                }, HttpStatus.BAD_REQUEST)
            } else {
                user.email = dto.newEmail;
                await user.save()
                return {message: "Смена почты прошла успешно"}
            }
        } else {
            throw new HttpException({message: 'no such token'}, HttpStatus.FORBIDDEN)
        }
    }

    async changePassword(request: Request, dto: ChangePasswordDto) {
        const token = request.headers['authorization'];

        if (this.jwtService.verify(token)) {
            const decodeToken: any = this.jwtService.decode(token);
            const id: number = Number(decodeToken.id)
            const user = await this.userRepository.findOne({where: {id}})

            if (
                dto.newPassword === dto.oldPassword
            ) {
                throw new HttpException('Пароли не должны совпадать', HttpStatus.BAD_REQUEST);
            } else {
                const user = await this.userRepository.findOne({where: {id}})
                user.password = dto.newPassword
                await user.save();
                return {message: "Пароль успешно сменен"}
            }
        } else {
            throw new HttpException({message: 'no such token'}, HttpStatus.FORBIDDEN)
        }
    }

    async uploadAvatar(request, avatar) {
        const token = request.headers['authorization'];

        if (this.jwtService.verify(token)) {
            const decodeToken: any = this.jwtService.decode(token);
            const id: number = Number(decodeToken.id)

            const fileName = await this.fileService.createFile(avatar);
            const uploadUser = await this.userRepository.findOne({where: {id}})

            uploadUser.avatar = fileName
            await uploadUser.save();
            return uploadUser;

        } else {
            throw new HttpException({message: 'no such token'}, HttpStatus.FORBIDDEN)
        }
    }

    async deleteAvatar(id: number) {
        const user = await this.userRepository.findOne({where: {id}})
        user.avatar = ''
        await user.save();
        return {message: 'Аватарка успешно удалена'};
    }
}
