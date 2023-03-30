import { ITodoDTO } from "../interfaces/ITodo";
import { PrismaClient } from '@prisma/client'
import { v4 as uuidv4 } from "uuid"

export interface ITodoModel {
    id:number
    name:string
    description:string
    fineshed:boolean,
    dead_zone:Date,
    created_at:Date
}

const prisma = new PrismaClient()

export class CreateTodoService {

    async execute(todoData:ITodoDTO):Promise<ITodoModel>{

        const todo = await prisma.todo.create({
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