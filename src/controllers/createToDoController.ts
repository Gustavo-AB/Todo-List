import { Request, Response } from "express"
import { IToDoDTO } from "../interfaces/IToDoDTO"
import { IToDoService } from "../interfaces/IToDoService"


export class CreateToDoController {

    constructor(private todoService: IToDoService){}
    
    async handle(request:Request, response:Response){
        const todo:IToDoDTO = request.body
        const todoValues = Object.values(todo)

        todoValues.forEach(values => {
            if(values == undefined || values === ""){
                return response.status(404).json({msg:"Algum campo está vazio"})
            }
        })
        
        this.todoService.create(todo)
            .then(data => {
                return response.status(201).json({msg:"Todo has created",data:data})
            }).catch( err => {
                console.log(err);
                
                return response.send(err)
            })     
    }
}
