import { Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('api/')
export class CarsController {
  constructor(private CarsService: CarsService) {}
  @Get('new-cars')
  getAllNewCars() {
    return this.CarsService.findAll();
  }

  @Get('used-cars')
  getAllUsedCars() {
    return 'get all used c2ars';
  }

  @Get('used-cars/:id')
  findOneUsedCar(@Param('id') id) {
    return `used car ${id}`;
  }

  @Get('new-cars/:id')
  findOneNewCar(@Param('id') id) {
    return `new car ${id}`;
  }

  @Put('update-your-car')
  updateYourCar() {
    return 'update your car';
  }

  @Delete('delete-your-car')
  deleteYourCar() {
    return 'delete your car';
  }
}
