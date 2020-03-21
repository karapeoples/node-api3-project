const knex = require('knex');
const environment = process.env.DB_ENV 
const knexConfig = require('../knexfile.js')[environment];

module.exports = knex(knexConfig.development);
