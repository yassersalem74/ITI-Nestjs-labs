import { CoffeesService } from 'src/coffees/coffees.service';
export declare class UsersService {
    private readonly coffeesService;
    private users;
    constructor(coffeesService: CoffeesService);
    getUsers(): User[];
    createUser(user: User): User;
    getOneUser(id: string): User;
    getUserCoffee(id: string): import("src/coffees/coffees.service").Coffee[];
}
export type User = {
    id: string;
    name: string;
    favoriteCoffees: string[];
};
