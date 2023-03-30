import { Router } from "express";
import { createToDoController } from "../controllers/createToDoController";


const routes = Router()

routes.get("/", (request, response)=>{
    console.log('get request');
    return response.status(200).send()
    
})
routes.post("/create_todo", createToDoController.handle)

export { routes }