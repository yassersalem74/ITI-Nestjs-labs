import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers()
  }

  @Get(":id")
  getOneUser(@Param('id') id:string){
    return this.usersService.getOneUser(id)
  }
  @Get(":id/coffees")
  getUserCoffee(@Param('id') id:string){
    return this.usersService.getUserCoffee(id);
  }

  @Post()
  createUser(@Body() user: User) {
    return this.usersService.createUser(user);
  }
  
}
