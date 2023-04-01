import { PrismaClient } from "@prisma/client";
import { IGetToDos } from "../interfaces/IGetToDosService";
import { ToDoModel } from "../interfaces/ToDoModel";



export class GetToDosService implements IGetToDos {

    private prisma = new PrismaClient()

    async getAllToDos():Promise<ToDoModel[]>{
        
        const users = await this.prisma.todo.findMany()

        return users
    }
}