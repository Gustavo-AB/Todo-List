import { IToDoDTO } from "./IToDoDTO";
import { ToDoModel } from "./ToDoModel";


export interface IToDoService {
    create(todo:IToDoDTO):Promise<ToDoModel>
}