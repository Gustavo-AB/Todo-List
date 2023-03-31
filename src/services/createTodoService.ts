import { IToDoDTO } from "../interfaces/IToDoDTO";
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from "uuid"
import { IToDoService } from "../interfaces/IToDoService";
import { ToDoModel } from "../interfaces/ToDoModel";




export class CreateToDoService implements IToDoService {
    private prisma = new PrismaClient()

    async create(todoData:IToDoDTO):Promise<ToDoModel>{

        const todo:ToDoModel = await this.prisma.todo.create({
            data:{
                id: parseInt(uuidv4()),
                name: todoData.name,
                description: todoData.description,
                fineshed:false,
                dead_zone: new Date(todoData.dead_zone),
                created_at: new Date()
            }
        })

        return todo;   
    }
}