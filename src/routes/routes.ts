import { Router, Request, Response } from "express";
import { createToDoController, getToDos } from "../controllers/index";


const routes = Router()

routes.post("/create_todo",async(request:Request, response:Response) => { 
   await createToDoController.handle(request, response)
})

routes.get("/get_todos", (request, response)=>{
    return getToDos.getAllToDos(request, response)
    
})

export { routes }