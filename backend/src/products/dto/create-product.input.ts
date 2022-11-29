import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateProductInput {
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
