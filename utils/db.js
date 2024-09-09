import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
  "postgresql://demoai_owner:ulKNvVosD8C0@ep-twilight-salad-a53awq66.us-east-2.aws.neon.tech/demoai?sslmode=require"
);
export const db = drizzle(sql, { schema });
