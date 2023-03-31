import { ITodoDTO } from "./ITodo";
import { TodoModel } from "./TodoModel";


export interface ITodoService {
    create(todo:ITodoDTO):Promise<TodoModel>
}