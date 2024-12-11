-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TYPE "public"."doc_outside_type" AS ENUM('UNDEFINED', 'SPEC', 'SM1', 'SM2', 'SM3', 'SM4', 'ARTWORK', 'PRL', 'RETAIL', 'IM', 'CAD', 'SALE');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "product_item" (
	"deleted" boolean,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"customer_product_main_number" varchar,
	"customer_product_sub_number" varchar,
	"product_name" varchar,
	"product_desc" varchar,
	"product_imgs_urls" json
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sale_doc" (
	"doc_name" varchar,
	"doc_size" varchar,
	"doc_mime_type" varchar,
	"doc_path" varchar,
	"outside_doc_type" "doc_outside_type",
	"deleted" boolean,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"customer_name" varchar,
	"customer_po_number" varchar,
	"factory_po_number" varchar,
	"overall_lead_time_date" varchar,
	"order_accept_date" varchar,
	"item_uuids" json
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sale_item" (
	"deleted" boolean,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"uuid" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"serial_number_in_sale" smallint,
	"lead_time_date" varchar,
	"order_quantity" smallint,
	"product_spare_quantity" smallint,
	"factory_po_uuids" json
);

*/