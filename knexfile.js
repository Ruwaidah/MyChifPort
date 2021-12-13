// Update with your config settings.

require("dotenv").config()

module.exports = {
  development: {
    client: "postgresql",
    useNullAsDefault: true,
    connection: { database: "chiefs", user: "postgres", password: process.env.PASS},
    pool: {
      min: 1,
      max: 20,
    },
    migrations: {
      tablename: "knex_migrations",
      directory: "./database/migrations"
    },
    seeds: { directory: "./database/seeds" }
  },
  production: {
    client: "pg",
    connection: {
      host: process.env.HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      schema: 'public',
      // connection: process.env.DATABASE_URL,
      ssl: {rejectUnauthorized: false}
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
