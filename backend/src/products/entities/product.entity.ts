import { ObjectType, Field, Int, InputType } from "@nestjs/graphql";

@ObjectType()
export class Product {
  @Field({ description: "ID category" })
  categoryID: string;

  @Field({ description: "Name of product" })
  name: string;

  @Field({ description: "Value product" })
  value: number;

  @Field({ description: "image name" })
  imagePath: string;

  @Field({ description: "Ingredients in product" })
  ingredients: string[] | [] | string;
}
