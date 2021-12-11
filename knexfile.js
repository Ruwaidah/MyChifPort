// Update with your config settings.

require("dotenv").config()

module.exports = {
  development: {
    client: "postgresql",
    useNullAsDefault: true,
    connection: { database: "chiefs", user: "postgres", password: process.env.PASSWORD},
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
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
