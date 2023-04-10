import { Router, Request, Response } from "express";
import { createToDoController, deleteToDo, getToDos, update } from "../controllers/index";


const routes = Router()

routes.post("/create_todo",async(request:Request, response:Response) => { 
   await createToDoController.handle(request, response)
})

routes.get("/get_todos", (request, response)=>{
    return getToDos.getAllToDos(request, response)
    
})

routes.put("/finished", (request, response)=>{
    return update.finished(request, response)
})

routes.delete("/delete_todo", (request:Request, response:Response)=>{
    return deleteToDo.delete(request, response)
})

export { routes }