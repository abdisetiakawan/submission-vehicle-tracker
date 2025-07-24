import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { RouteError } from "@src/common/util/route-errors";
import HttpStatusCodes from "@src/common/constants/HttpStatusCodes";

interface AuthRequest extends Request {
  user?: { id: number };
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.authToken;

  if (!token) {
    throw new RouteError(
      HttpStatusCodes.UNAUTHORIZED,
      "Authentication token is missing"
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "");
    req.user = decoded as { id: number };
    next();
  } catch (error) {
    throw new RouteError(HttpStatusCodes.UNAUTHORIZED, "Invalid token");
  }
};
