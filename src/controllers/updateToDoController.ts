import { Request, Response } from "express"
import { IUpdateService } from "../interfaces/IUpdateService"

export class UpdateToDoController {

    constructor(private updateService:IUpdateService){}

    async finished(request:Request, response:Response){
        const { id } = request.headers

        try{
            await this.updateService.finished(Number(id), request.body)
            return response.status(200).json({ msg:"Atualizado com Sucesso!"} )
        }catch{
            return response.status(500).json({ err:"Algo deu errado! "} )
        }
    }
}