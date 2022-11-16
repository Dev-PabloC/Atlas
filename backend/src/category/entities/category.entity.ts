import { ObjectType, Field } from "@nestjs/graphql";
import { Product } from "src/products/entities/product.entity";

@ObjectType()
export class Category {
  @Field()
  name: string;

  @Field(() => [Product])
  products: Product[];
}
