import { BrandsModule } from './brands/brands.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { CarsModule } from './cars/cars.module';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.HOST_DB,
      port: Number(process.env.PORT_DB),
      username: process.env.USERNAME_DB,
      password: process.env.PASS_DB,
      database: process.env.NAME_DB,
      autoLoadModels: true,
      synchronize: true,
      define: {
        timestamps: false,
      },
    }),
    AuthModule,
    UsersModule,
    CarsModule,
    BrandsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
