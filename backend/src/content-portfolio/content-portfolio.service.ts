import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {CreateContentPortfolioDto} from "./dto/create-content-portfolio.dto";
import {ContentPortfolio} from "./content-portfolio.model";
import {UpdateContentPortfolioDto} from "./dto/update-content-portfolio.dto";
import {FilesService} from "../files/files.service";

@Injectable()
export class ContentPortfolioService {
    constructor(@InjectModel(ContentPortfolio)
                private contentPortfolioRepository: typeof ContentPortfolio,
                private fileService: FilesService) {}

    async create(dto: CreateContentPortfolioDto, img: any) {
        const fileName = await this.fileService.createFile(img);
        const contentPortfolio = await this.contentPortfolioRepository.create({...dto, img: fileName});
        return contentPortfolio;
    }

    async getAll(portfolioId: number) {
        const contentPortfolo = await this.contentPortfolioRepository.findAll({where: {portfolioId}});
        return contentPortfolo;
    }

    async getOne(id: number) {
        const contentPortfolo = await this.contentPortfolioRepository.findOne({where: {id}})
        return contentPortfolo;
    }


    async update(id: number, dto: UpdateContentPortfolioDto, img) {
        console.log(img)
        const fileName = await this.fileService.createFile(img);
        const contentPortfolio = await this.contentPortfolioRepository.update({...dto, img: fileName}, {where: {id}});
        const updateContent = await this.contentPortfolioRepository.findOne({where: {id}})
        return updateContent;
    }

    async delete(id: number) {
        await this.contentPortfolioRepository.destroy({where: {id}})
        return {message: 'Элемент портфолио успешно удален'}
    }
}
