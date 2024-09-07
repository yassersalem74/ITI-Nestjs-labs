import { NewUsersService } from './new-users.service';
import { CreateNewUserDto } from './dto/create-new-user.dto';
import { UpdateNewUserDto } from './dto/update-new-user.dto';
export declare class NewUsersController {
    private readonly newUsersService;
    constructor(newUsersService: NewUsersService);
    create(createNewUserDto: CreateNewUserDto): Promise<CreateNewUserDto>;
    findAll(): Promise<any[]>;
    findOne(id: string): string;
    update(id: string, updateNewUserDto: UpdateNewUserDto): string;
    remove(id: string): string;
}
