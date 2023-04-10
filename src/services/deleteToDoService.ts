import { PrismaClient } from "@prisma/client";
import { IDeleteToDoService } from "../interfaces/IDeleteToDoService";
import { log } from "console";


export class DeleteToDoService implements IDeleteToDoService {

    private prisma = new PrismaClient()

    async delete(id:number){
        await this.prisma.todo.delete({
            where:{
                id
            }
        })

        log("Deletado!")
    }
}