module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'DB_HOST'),
      port: env.int('DATABASE_PORT', DB_PORT),
      database: env('DATABASE_NAME', 'DB_NAME'),
      user: env('DATABASE_USERNAME', 'DB_USER'),
      password: env('DATABASE_PASSWORD', 'DB_PASS'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
