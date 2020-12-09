import { PrismaClient } from "@prisma/client";
import * as crypto from "crypto";

async function main() {
  const prisma = new PrismaClient();

  const testdata = Array.from({
    length: 1000,
  }).map(() => ({
    email: crypto.randomBytes(10).toString("hex"),
    name: "tester",
  }));

  testdata.forEach(async (d) => {
    const data = await prisma.user.create({
      data: d,
    });
    console.log(data);
  });

  prisma.$disconnect();
}

main();
