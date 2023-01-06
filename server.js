'use strict';
const strapi = require('./node_modules/@strapi/strapi/lib/index');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

strapi().start();

