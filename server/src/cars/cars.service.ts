import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Car } from './models/car.model';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car)
    private carModel: typeof Car,
  ) {}

  // async createCar() {
  //   try {
  //     await this.sequelize.transaction(async (t) => {
  //       const transactionHost = { transaction: t };

  //       await this.carModel.create(
  //         { brand: 'ferrari', model: '458', year: 2018, milliage: 2000 },
  //         transactionHost,
  //       );
  //     });
  //   } catch {}
  // }

  async findAll(): Promise<Car[]> {
    return this.carModel.findAll();
  }

  //   findOne(id: string): Promise<Car> {
  //     return this.carModel.findOne({
  //       where: {
  //         id,
  //       },
  //     });
  //   }

  //   async remove(id: string): Promise<void> {
  //     const user = await this.findOne(id);
  //     await user.destroy();
  //   }
}
