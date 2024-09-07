import { Coffee, CoffeesService } from './coffees.service';
export declare class CoffeesController {
    private readonly coffeesService;
    constructor(coffeesService: CoffeesService);
    getCoffees(): Coffee[];
    getCoffeeById(id: string): Coffee;
    create(coffee: Coffee): void;
}
