import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Brand extends Model {
  @Column({ primaryKey: true })
  id: number;

  @Column
  brand: string;
}
