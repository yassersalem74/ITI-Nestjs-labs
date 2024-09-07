import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { todoSchema } from './entities/todo.entity';

@Module({
  imports: [MongooseModule.forFeature([{name:"Todo" , schema: todoSchema}])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
