import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { Context } from "../utils/Context";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use({ req, res }: Context, next: NextFunction) {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).send("No token");
    }
    next();
  }
}
