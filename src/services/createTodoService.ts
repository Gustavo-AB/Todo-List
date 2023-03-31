import { ITodoDTO } from "../interfaces/ITodo";
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from "uuid"
import { ITodoService } from "../interfaces/ITodoService";
import { TodoModel } from "../interfaces/TodoModel";




export class CreateTodoService implements ITodoService {
    private prisma = new PrismaClient()

    async create(todoData:ITodoDTO):Promise<TodoModel>{

        const todo:TodoModel = await this.prisma.todo.create({
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