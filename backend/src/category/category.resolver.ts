import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { CategoryService } from "./category.service";
import { Category, CategoryCreate, CategoryUpdate } from "./entities/category.entity";
import { CreateCategoryInput } from "./dto/create-category.input";
import { UpdateCategoryInput } from "./dto/update-category.input";

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => CategoryCreate)
  createCategory(@Args("createCategoryInput") createCategoryInput: CreateCategoryInput) {
    return this.categoryService.create(createCategoryInput);
  }

  @Query(() => [Category])
  findAll() {
    return this.categoryService.findAll();
  }

  @Query(() => Category)
  findOne(@Args("id") id: string) {
    return this.categoryService.findOne(id);
  }

  @Mutation(() => CategoryUpdate)
  updateCategory(@Args("updateCategoryInput") updateCategoryInput: UpdateCategoryInput) {
    return this.categoryService.update(updateCategoryInput.name, updateCategoryInput);
  }

  @Mutation(() => Category)
  removeCategory(@Args("id") id: string) {
    return this.categoryService.remove(id);
  }
}
