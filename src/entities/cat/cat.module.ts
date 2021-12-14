import { Module } from "@nestjs/common";
import { CatCOntroller } from "./cat.controler";
import { CatService } from "./cat.service";


@Module({
    imports: [],
    providers: [CatService],
    controllers: [CatCOntroller]
})

export class CatModule {}