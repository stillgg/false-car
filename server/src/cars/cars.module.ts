import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Car } from './models/car.model';

@Module({
  imports: [SequelizeModule.forFeature([Car])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
