import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core"
import { CategoryResolver } from "./category/category.resolver";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: false,
      autoSchemaFile: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }), CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

}
