// lib/prisma.js
import { PrismaClient } from "@prisma/client";

let prisma;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // Avoid creating multiple instances during hot reloads
  if (!global.prisma) global.prisma = new PrismaClient();
  prisma = global.prisma;
}

export default prisma;
