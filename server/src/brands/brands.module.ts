import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BrandsController } from './brands.controller';
import { BrandsService } from './brands.service';
import { Brand } from './models/brand.model';

@Module({
  imports: [SequelizeModule.forFeature([Brand])],
  controllers: [BrandsController],
  providers: [BrandsService],
})
export class BrandsModule {}
