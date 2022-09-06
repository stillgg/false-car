import { Controller, Get } from '@nestjs/common';
import { BrandsService } from './brands.service';

@Controller('api/cars/')
export class BrandsController {
  constructor(private BrandsService: BrandsService) {}

  @Get('brands')
  getAllNewCars() {
    return this.BrandsService.findAll();
  }
}
