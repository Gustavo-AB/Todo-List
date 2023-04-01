import { ToDoModel } from "./ToDoModel";


export interface IGetToDos{
    getAllToDos():Promise<ToDoModel[]>
}