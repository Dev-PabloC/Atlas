import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class CategoryMiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = localStorage.getItem("token");
    if (token) {
      next();
    }
    res.status(401).send("acess denied");
  }
}
