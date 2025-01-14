import dotenv from "dotenv";
dotenv.config();

const pass = process.env.DB_PASSWORD + " ";

console.log(pass);

export default {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    },
    migrations: {
      directory: "./db/migrations",
    },
    pool: { min: 2, max: 10, acquireTimeoutMillis: 30000 },
  },
};
