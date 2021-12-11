// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    useNullAsDefault: true,
    connection: { database: "chiefs", user: "postgres", password: "dgre" },
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
