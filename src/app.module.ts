/* External Dependencies */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

/* Internal Dependencies */
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      `mongodb+srv://Jumanazar:Rf6wKkRccPDuJIb2@cluster0.koufkgu.mongodb.net/?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
