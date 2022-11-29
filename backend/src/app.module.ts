import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { ProductsModule } from "./products/products.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { CategoryModule } from "./category/category.module";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { OrderModule } from "./order/order.module";
import { AuthModule } from "./auth/auth.module";
import { AuthMiddleware } from "./middleware/auth.middleware";

@Module({
  imports: [
    CategoryModule,
    OrderModule,
    AuthModule,
    ProductsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false,
      autoSchemaFile: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).exclude(
      {
        path: "category",
        method: RequestMethod.GET,
      },
      {
        path: "products",
        method: RequestMethod.GET,
      },
      {
        path: "order",
        method: RequestMethod.POST,
      },
    );
  }
}
