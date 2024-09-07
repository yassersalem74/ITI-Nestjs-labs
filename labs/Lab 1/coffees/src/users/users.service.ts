import { Injectable } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';

@Injectable()
export class UsersService {


  private users: User[] = [];
    constructor(private readonly coffeesService: CoffeesService){}


  getUsers(): User[] {
    return this.users;
  }

  createUser(user: User) {
    this.users.push(user);
    return user;
  }

  getOneUser(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  getUserCoffee(id: string){
    const user = this.getOneUser(id);


 const  coffeeIds = user.favoriteCoffees;
;
    const coffeeNames = coffeeIds.map(id=> this.coffeesService.getCoffeeById(id) )
    return coffeeNames;
}

}

export type User = {
  id: string;
  name: string;
  favoriteCoffees: string[];
};
