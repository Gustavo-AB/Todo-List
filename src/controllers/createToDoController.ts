import { Request, Response } from "express"
import { ITodoDTO } from "../interfaces/ITodo"
import { CreateTodoService } from "../services/createTodoService"
import { ITodoService } from "../interfaces/ITodoService"



export class CreateToDoController {

    constructor(private todoService: ITodoService){}
    
    async handle(request:Request, response:Response){
        const todo:ITodoDTO = request.body
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
