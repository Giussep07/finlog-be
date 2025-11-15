import { defineConfig, env } from "prisma/config";
import envConfig from './src/config/env';

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: envConfig.databaseUrl,
  },
});
