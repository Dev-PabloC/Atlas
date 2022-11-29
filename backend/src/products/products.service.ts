import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { CreateProductInput } from "./dto/create-product.input";
import { UpdateProductInput } from "./dto/update-product.input";

@Injectable()
export class ProductsService {
  constructor(private database: PrismaService) {}
  create(createProductInput: CreateProductInput) {
    const { categoryID, ...data } = createProductInput;
    return this.database.product.create({
      data: {
        ...data,
        Category: {
          connect: { id: categoryID },
        },
      },
    });
  }

  findAll() {
    return this.database.product.findMany();
  }

  findOne(id: string) {
    return this.database.product.findFirst({
      where: { id: id },
    });
  }

  update(_id: string, updateProductInput: UpdateProductInput) {
    const { categoryID, ...data } = updateProductInput;
    return this.database.product.update({
      where: {
        id: _id,
      },
      data: {
        ...data,
      },
    });
  }

  remove(id: string) {
    return this.database.product.delete({
      where: {
        id: id,
      },
    });
  }
}
