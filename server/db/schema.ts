import { sql } from "drizzle-orm";
import {
  integer,
  pgTable,
  varchar,
  uuid,
  timestamp,
  text,
  json,
  pgEnum,
  date,
  interval,
  boolean,
  index,
  uniqueIndex,
  smallint,
} from "drizzle-orm/pg-core";

const timestamps = {
  updatedAt: timestamp(),
  createdAt: timestamp().defaultNow().notNull(),
  deletedAt: timestamp(),
};

const columnsHelper = {
  deleted: boolean(),
  ...timestamps,
};

// https://orm.drizzle.team/docs/sql-schema-declaration#tables-and-columns-declaration
// By default, Drizzle will use the TypeScript key names for columns in database queries.

// pgEnum 需要 export, 否则无法被检索到
export const DocType = pgEnum("doc_outside_type", [
  "UNDEFINED",
  "SPEC",
  "SM1",
  "SM2",
  "SM3",
  "SM4",
  "ARTWORK",
  "PRL",
  "RETAIL",
  "IM",
  "CAD",
  "SALE",
]);

export const SaleDocTable = pgTable("sale_doc", {
  // Base Attribute
  docName: varchar(),
  docSize: varchar(),
  docMIMEType: varchar(),
  docPath: varchar(),
  outsideDocType: DocType(),
  ...columnsHelper,

  //   Ontology Attribute
  uuid: uuid().primaryKey().defaultRandom(),
  customerName: varchar(),
  customerPONumber: varchar(),
  factoryPONumber: varchar(),
  //   整体交单日期
  overallLeadTimeDate: varchar(),
  //   接单日期
  orderAcceptDate: varchar(),

  itemUuids: json().$type<string[]>(),
});

export const SaleItemTable = pgTable("sale_item", {
  ...columnsHelper,

  uuid: uuid().primaryKey().defaultRandom(),
  serialNumberInSale: smallint(),
  leadTimeDate: varchar(),
  orderQuantity: smallint(),
  productSpareQuantity: smallint(),

  factoryPOUuids: json().$type<string[]>(),
});

export const ProductItemTable = pgTable("product_item", {
  ...columnsHelper,

  uuid: uuid().primaryKey().defaultRandom(),
  customerProductMainNumber: varchar(),
  customerProductSubNumber: varchar(),
  productName: varchar(),
  productDesc: varchar(),

  productImgsUrls: json().$type<string[]>(),
});
