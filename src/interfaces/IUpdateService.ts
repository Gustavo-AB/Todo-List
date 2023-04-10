import { IToDoDTO } from "./IToDoDTO";

export interface IUpdateService {

    finished(id:number, data:IToDoDTO):void
}