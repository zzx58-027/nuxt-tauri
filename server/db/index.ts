// import "dotenv/config";
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import { ProductItemTable } from "../db/schema";
import { eq } from "drizzle-orm";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
// https://github.com/eveningkid/denodb/issues/143
// https://orm.drizzle.team/docs/sql-schema-declaration#camel-and-snake-casing
// db specific casing.
const db = drizzle({ client: pool, casing: "snake_case" });

const test = async () => {
  const product: typeof ProductItemTable.$inferInsert = {
    productName: "test",
    productDesc: "123",
  };
  await db.insert(ProductItemTable).values(product);
  console.log("created product");
  // const products = await db.select().from(ProductItemTable);
  // console.log("users:", products);

  // await db
  //   .update(ProductItemTable)
  //   .set({
  //     productName: "test_change",
  //   })
  //   .where(eq(ProductItemTable.productName, product.productName!));
  // console.log("Product Info Updated");

  // await db
  //   .delete(ProductItemTable)
  //   .where(eq(ProductItemTable.productName, product.productName!));
  // console.log("product deleted");
};

test();
