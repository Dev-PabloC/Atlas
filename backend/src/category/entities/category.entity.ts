import { ObjectType, Field } from "@nestjs/graphql";
import { Product } from "src/products/entities/product.entity";

@ObjectType()
export class Category {
  @Field({})
  id: string

  @Field()
  name: string;

  @Field(() => [Product])
  products: Product[];
}

@ObjectType()
export class CategoryCreate {
  @Field()
  id: string

  @Field()
  name: string
}

@ObjectType()
export class CategoryUpdate {
  @Field()
  id: string

  @Field()
  name: string
}