import { CreateCategoryInput } from "./create-category.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field({
    name: "update name category",
    description: "insert a name for update category",
  })
  name: string;
}
