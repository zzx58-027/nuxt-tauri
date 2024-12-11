// import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  // If there are multiple schema file, use /schema, without suffix to represent folder files.
  schema: "./server/db/schema.ts",
  // https://orm.drizzle.team/docs/sql-schema-declaration#camel-and-snake-casing
  // Database model names often use snake_case conventions, while in TypeScript, it is common to use camelCase for naming models.
  casing: "snake_case",
  out: "./server/drizzle",
  // https://orm.drizzle.team/docs/drizzle-kit-studio
  // drizzle-kit studio command spins up a server for Drizzle Studio hosted on local.drizzle.studio. It requires you to specify database connection credentials via drizzle.config.ts config file.
  dbCredentials: {
    url: process.env.DATABASE_URL_PROD!,
  },
});
