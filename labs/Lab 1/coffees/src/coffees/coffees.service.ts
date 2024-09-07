import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [];

  getCoffees(): Coffee[] {
    return this.coffees;
  }

  createCoffee(coffee: Coffee) {
    this.coffees.push(coffee);
    return "created successfully"
  }


  getCoffeeById(id: string): Coffee {
    return this.coffees.find((coffee) => coffee.id === id);
  }


}

export type Coffee = {
  id: string;
  coffeeName: string;
};
