import { InputType, Field } from "@nestjs/graphql";
import { Product } from "src/products/entities/product.entity";

@InputType()
export class CreateCategoryInput {
  @Field({ name: "category name", description: "insert a category name" })
  name: string;
}
