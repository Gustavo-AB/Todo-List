import { ITodoService } from "../interfaces/ITodoService";
import { CreateTodoService } from "../services/createTodoService";
import { CreateToDoController } from "./createToDoController";


const todoService: ITodoService = new CreateTodoService();
const createToDoController = new CreateToDoController(todoService);

export { createToDoController }