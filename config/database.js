// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

// module.exports = ({ env }) => ({
//   connection: {
//     client: env("DATABASE_CLIENT", "postgres"),

//     connection: {
//       host: env("DATABASE_HOST", "ec2-44-206-197-71.compute-1.amazonaws.com"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "d82b66bnbere3b"),
//       user: env("DATABASE_USERNAME", "eutsryukjbtpni"),
//       password: env("DATABASE_PASSWORD", "65e6361eb48e9662939841faae851b0a4a060d70c10b13774bbed5f22ebfd9ed"),
//     },
//     debug: false,
//     acquireConnectionTimeout: 300000, // 5 minute timeout
//   },
// });
// //});

const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
