import { Module } from "@nestjs/common";
import { PrismaModule } from "src/db/prisma.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [PrismaModule],
    providers: [UserService],
    controllers: [UserController]
})

export class UserModule {}