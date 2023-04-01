import { IToDoService } from "../interfaces/IToDoService";
import { CreateToDoService } from "../services/createToDoService";
import { GetToDosService } from "../services/getToDosService";
import { CreateToDoController } from "./createToDoController";
import { GetToDosController } from "./getToDosController";


const todoService: IToDoService = new CreateToDoService();
const createToDoController = new CreateToDoController(todoService);

const getToDosService = new GetToDosService()
const getToDos = new GetToDosController(getToDosService)

export { createToDoController, getToDos }
