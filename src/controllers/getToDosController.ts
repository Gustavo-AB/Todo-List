import { PrismaClient } from "@prisma/client"
import { IGetToDos } from "../interfaces/IGetToDosService"
import { Request, Response } from "express"



export class GetToDosController {


    constructor(private getToDosService:IGetToDos){}

    async getAllToDos(request:Request, response:Response){
        const toDos = await this.getToDosService.getAllToDos()

        return response.status(200).json({ todos:toDos})
    }
}