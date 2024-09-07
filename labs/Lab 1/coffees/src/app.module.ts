import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NewUsersModule } from './new-users/new-users.module';

@Module({
  imports: [TodosModule , MongooseModule.forRoot("mongodb://localhost:27017/"), NewUsersModule],
  controllers: [AppController, CoffeesController, UsersController],
  providers: [AppService, CoffeesService, UsersService, ],
})
export class AppModule {}
