import { Request, Response } from "express"
import { IDeleteToDoService } from "../interfaces/IDeleteToDoService";


export class DeleteToDoController {

    constructor(private deleteToDo:IDeleteToDoService){}

    async delete(request:Request, response:Response){
        const { id } = request.headers

        try{
            this.deleteToDo.delete(Number(id))
            return response.status(200).json({ msg:"Deletado com sucesso!"})
        }catch{
            return response.status(500).json({ err:"Algo deu errado!"} )
        }

        
    }
}