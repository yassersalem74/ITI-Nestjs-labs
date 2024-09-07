import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Coffee, CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  getCoffees() {
    return this.coffeesService.getCoffees();
  }

  @Get(':id')
  getCoffeeById(@Param('id') id: string) {
    return this.coffeesService.getCoffeeById(id);
  }

  @Post()
  create(@Body() coffee: Coffee) {
    this.coffeesService.createCoffee(coffee);
  }
}
