
import { IToDoService } from "../interfaces/ITodoService";
import { CreateToDoService } from "../services/createTodoService";
import { DeleteToDoService } from "../services/deleteToDoService";
import { GetToDosService } from "../services/getToDosService";
import { UpdateToDoService } from "../services/updateToDoService";
import { CreateToDoController } from "./createToDoController";
import { DeleteToDoController } from "./deleteToDoController";
import { GetToDosController } from "./getToDosController";
import { UpdateToDoController } from "./updateToDoController";


const todoService: IToDoService = new CreateToDoService();
const createToDoController = new CreateToDoController(todoService);

const getToDosService = new GetToDosService()
const getToDos = new GetToDosController(getToDosService)

const updateService = new UpdateToDoService()
const update = new UpdateToDoController(updateService)

const deleteToDoService = new DeleteToDoService()
const deleteToDo = new DeleteToDoController(deleteToDoService)

export { createToDoController, getToDos,  update, deleteToDo}
