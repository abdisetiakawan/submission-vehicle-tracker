import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@src/lib/prisma";
import { IReq, IRes } from "./common/types";
import { RouteError } from "@src/common/util/route-errors";
import HttpStatusCodes from "@src/common/constants/HttpStatusCodes";
import { authMiddleware } from "@src/middleware/authMiddleware";

const router = Router();

// Endpoint untuk mendapatkan informasi pengguna yang sedang login
router.get("/me", authMiddleware, async (req: IReq, res: IRes) => {
  const userId = (req as any).user.id;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, name: true, email: true }, // Jangan kirim password hash
  });

  if (!user) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, "User not found");
  }

  res.status(HttpStatusCodes.OK).json(user);
});

// Endpoint Registrasi
router.post("/register", async (req: IReq, res: IRes) => {
  const { name, email, password } = req.body as {
    name?: string;
    email?: string;
    password?: string;
  };

  if (!name || !email || !password) {
    throw new RouteError(
      HttpStatusCodes.BAD_REQUEST,
      "All fields are required"
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
    res
      .status(HttpStatusCodes.CREATED)
      .json({ message: "User created", userId: user.id });
  } catch (error) {
    throw new RouteError(
      HttpStatusCodes.CONFLICT,
      "User with this email already exists"
    );
  }
});

// Endpoint Login
router.post("/login", async (req: IReq, res: IRes) => {
  const { email, password, rememberMe } = req.body as {
    email?: string;
    password?: string;
    rememberMe?: boolean;
  };

  if (!email || !password) {
    throw new RouteError(
      HttpStatusCodes.BAD_REQUEST,
      "Email and password are required"
    );
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new RouteError(
      HttpStatusCodes.UNAUTHORIZED,
      "Invalid email or password"
    );
  }

  const tokenExpiry = rememberMe ? "30d" : "1h";
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "", {
    expiresIn: tokenExpiry,
  });

  const cookieMaxAge = rememberMe
    ? 30 * 24 * 60 * 60 * 1000 // 30 hari
    : 1 * 60 * 60 * 1000; // 1 jam

  res.cookie("authToken", token, {
    httpOnly: true,
    secure: true,
    maxAge: cookieMaxAge,
    sameSite: "none",
    path: "/",
  });

  res
    .status(HttpStatusCodes.OK)
    .json({ id: user.id, name: user.name, email: user.email });
});

// Endpoint Logout
router.post("/logout", (_: IReq, res: IRes) => {
  res.cookie("authToken", "", {
    httpOnly: true,
    expires: new Date(0),
    secure: true,
    sameSite: "none",
    path: "/",
  });
  res.status(HttpStatusCodes.OK).json({ message: "Logged out" });
});

export default router;
