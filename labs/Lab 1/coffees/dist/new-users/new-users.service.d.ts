import { CreateNewUserDto } from './dto/create-new-user.dto';
import { UpdateNewUserDto } from './dto/update-new-user.dto';
import { Model } from 'mongoose';
export declare class NewUsersService {
    private todoModel;
    constructor(todoModel: Model<any>);
    create(createNewUserDto: CreateNewUserDto): Promise<CreateNewUserDto>;
    findAll(): Promise<any[]>;
    findOne(id: number): string;
    update(id: number, updateNewUserDto: UpdateNewUserDto): string;
    remove(id: number): string;
}
