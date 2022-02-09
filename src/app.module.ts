import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Office } from './office/office.entity';
import { OfficeModule } from './office/office.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'veris',
      entities: [Office],
      autoLoadEntities: false,
      synchronize: false,
    }),
    OfficeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
