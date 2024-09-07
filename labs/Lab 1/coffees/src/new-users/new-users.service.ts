import { Injectable } from '@nestjs/common';
import { CreateNewUserDto } from './dto/create-new-user.dto';
import { UpdateNewUserDto } from './dto/update-new-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class NewUsersService {

  constructor(@InjectModel("Todo") private todoModel : Model<any>) {}


  async create(createNewUserDto: CreateNewUserDto) {
    
    return createNewUserDto;
  }

  async findAll() {
    const users = await this.todoModel.find({})
    return  users;
  }

  findOne(id: number) {
    return `This action returns a #${id} newUser`;
  }

  update(id: number, updateNewUserDto: UpdateNewUserDto) {
    return `This action updates a #${id} newUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} newUser`;
  }
}
