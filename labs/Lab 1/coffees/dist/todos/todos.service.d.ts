import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Model } from 'mongoose';
export declare class TodosService {
    private todoModel;
    constructor(todoModel: Model<any>);
    create(createTodoDto: CreateTodoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTodoDto: UpdateTodoDto): string;
    remove(id: number): string;
}
