import { pgTable, boolean, timestamp, uuid, varchar, json, smallint, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const docOutsideType = pgEnum("doc_outside_type", ['UNDEFINED', 'SPEC', 'SM1', 'SM2', 'SM3', 'SM4', 'ARTWORK', 'PRL', 'RETAIL', 'IM', 'CAD', 'SALE'])


export const productItem = pgTable("product_item", {
	deleted: boolean(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	deletedAt: timestamp("deleted_at", { mode: 'string' }),
	uuid: uuid().defaultRandom().primaryKey().notNull(),
	customerProductMainNumber: varchar("customer_product_main_number"),
	customerProductSubNumber: varchar("customer_product_sub_number"),
	productName: varchar("product_name"),
	productDesc: varchar("product_desc"),
	productImgsUrls: json("product_imgs_urls"),
});

export const saleDoc = pgTable("sale_doc", {
	docName: varchar("doc_name"),
	docSize: varchar("doc_size"),
	docMimeType: varchar("doc_mime_type"),
	docPath: varchar("doc_path"),
	outsideDocType: docOutsideType("outside_doc_type"),
	deleted: boolean(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	deletedAt: timestamp("deleted_at", { mode: 'string' }),
	uuid: uuid().defaultRandom().primaryKey().notNull(),
	customerName: varchar("customer_name"),
	customerPoNumber: varchar("customer_po_number"),
	factoryPoNumber: varchar("factory_po_number"),
	overallLeadTimeDate: varchar("overall_lead_time_date"),
	orderAcceptDate: varchar("order_accept_date"),
	itemUuids: json("item_uuids"),
});

export const saleItem = pgTable("sale_item", {
	deleted: boolean(),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	deletedAt: timestamp("deleted_at", { mode: 'string' }),
	uuid: uuid().defaultRandom().primaryKey().notNull(),
	serialNumberInSale: smallint("serial_number_in_sale"),
	leadTimeDate: varchar("lead_time_date"),
	orderQuantity: smallint("order_quantity"),
	productSpareQuantity: smallint("product_spare_quantity"),
	factoryPoUuids: json("factory_po_uuids"),
});
