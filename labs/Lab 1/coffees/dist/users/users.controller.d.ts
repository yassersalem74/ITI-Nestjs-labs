import { User, UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): User[];
    getOneUser(id: string): User;
    getUserCoffee(id: string): import("../coffees/coffees.service").Coffee[];
    createUser(user: User): User;
}
