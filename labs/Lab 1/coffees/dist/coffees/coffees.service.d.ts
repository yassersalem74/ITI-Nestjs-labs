export declare class CoffeesService {
    private coffees;
    getCoffees(): Coffee[];
    createCoffee(coffee: Coffee): string;
    getCoffeeById(id: string): Coffee;
}
export type Coffee = {
    id: string;
    coffeeName: string;
};
