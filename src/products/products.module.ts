/* External Dependencies */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

/* Internal Dependencies */
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product, ProductSchema } from './schema/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductModule {}
