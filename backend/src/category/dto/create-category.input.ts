import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateCategoryInput {
  @Field({ description: "insert a category name" })
  name: string;
}
