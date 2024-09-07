import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewUsersService } from './new-users.service';
import { CreateNewUserDto } from './dto/create-new-user.dto';
import { UpdateNewUserDto } from './dto/update-new-user.dto';

@Controller('new-users')
export class NewUsersController {
  constructor(private readonly newUsersService: NewUsersService) {}

  @Post()
  create(@Body() createNewUserDto: CreateNewUserDto) {
    return this.newUsersService.create(createNewUserDto);
  }

  @Get()
  findAll() {
    return this.newUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewUserDto: UpdateNewUserDto) {
    return this.newUsersService.update(+id, updateNewUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newUsersService.remove(+id);
  }
}
