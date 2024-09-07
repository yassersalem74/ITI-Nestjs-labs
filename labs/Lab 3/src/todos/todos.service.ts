import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable, Inject, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private todoModel: Model<Todo>,
    @Inject(REQUEST) private readonly req: Request,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    const todo = await this.todoModel.create({
      ...createTodoDto,
      user: this.req['user']._id,
    });
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
