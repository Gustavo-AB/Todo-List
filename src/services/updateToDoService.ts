import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { IToDoDTO } from "../interfaces/IToDoDTO";
import { IUpdateService } from "../interfaces/IUpdateService";


export class UpdateToDoService implements IUpdateService {

    private prisma = new PrismaClient()

    async finished(id:number, data:IToDoDTO){
        const todo = await this.prisma.todo.update({
            where:{
                id
            },data:{
                fineshed:data.fineshed
            }
        })

        console.log(todo)
    }
    
}