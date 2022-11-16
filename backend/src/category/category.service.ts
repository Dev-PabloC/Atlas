import { Injectable } from "@nestjs/common";
import { CreateCategoryInput } from "./dto/create-category.input";
import { UpdateCategoryInput } from "./dto/update-category.input";
import { PrismaService } from "../database/prisma.service";
import { Category } from "@prisma/client";

@Injectable()
export class CategoryService {
  constructor(
    private database: PrismaService,
  ) {}
  create(createCategoryInput: CreateCategoryInput): Promise<Category | null> {
    return this.database.category.create({
      data: {
        name: createCategoryInput.name,
      },
    });
  }

  findAll(): Promise<Category[] | null> {
    return this.database.category.findMany();
  }

  findOne(_id: string): Promise<Category | null> {
    return this.database.category.findFirst({ where: { id: _id } });
  }

  update(id: string, updateCategoryInput: UpdateCategoryInput) {
    return this.database.category.update({
      where: { id: id },
      data: {
        name: updateCategoryInput.name,
      },
    });
  }

  remove(id: string) {
    return this.database.category.delete({ where: { id: id } });
  }
}
