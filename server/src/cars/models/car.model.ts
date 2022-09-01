import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Car extends Model {
  @Column({ primaryKey: true })
  id: number;

  @Column
  brand: string;

  @Column
  model: string;

  @Column
  year: number;

  @Column
  mileage: number;
}
