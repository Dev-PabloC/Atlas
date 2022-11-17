import { Injectable } from "@nestjs/common";
import { CreateCategoryInput } from "./dto/create-category.input";
import { UpdateCategoryInput } from "./dto/update-category.input";
import { PrismaService } from "../database/prisma.service";
import { Category } from "@prisma/client";

@Injectable()
export class CategoryService {
  constructor(
    private database: PrismaService,
  ) { }
  create(createCategoryInput: CreateCategoryInput) {
    return this.database.category.create({
      data: {
        ...createCategoryInput
      },
      select: {
        id: true,
        name: true
      }
    });
  }

  findAll(): Promise<Category[] | null> {
    return this.database.category.findMany();
  }

  findOne(_id: string): Promise<Category | null> {
    return this.database.category.findFirst({ where: { id: _id } });
  }

  update(_id: string, updateCategoryInput: UpdateCategoryInput) {
    return this.database.category.update({
      where: { id: _id },
      data: {
        name: updateCategoryInput.name,
      },
    });
  }

  remove(_id: string) {
    return this.database.category.delete({ where: { id: _id } });
  }
}
