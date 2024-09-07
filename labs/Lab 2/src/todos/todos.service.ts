import { Todo } from './entities/todo.entity';
import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async create(createTodoDto: CreateTodoDto) {
    const todo = await this.todoModel.create(createTodoDto);
    return todo;
  }

  async findAll() {
    const todos = await this.todoModel.find();
    return todos;
  }

  async findOne(id: string) {
    const todo = await this.todoModel.findById(id);
    return todo;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoModel.findOneAndUpdate(
      { _id: id },
      updateTodoDto,
      {
        new: true,
        runValidators: true,
      },
    );
    return todo;
  }

  async remove(id: string) {
    return await this.todoModel.findByIdAndDelete(id);
  }
}
