import { Router, Request, Response } from "express";
import { createToDoController } from "../controllers/index";


const routes = Router()

routes.get("/", (request, response)=>{
    console.log('get request');
    return response.status(200).send()
    
})
routes.post("/create_todo",async(request:Request, response:Response) => { 
   await createToDoController.handle(request, response)
})

export { routes }