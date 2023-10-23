const { Pool } = require('pg');

const pool = new Pool({
  user: 'trivia_app2',
  database: 'trivia_db',
  password: '123',
  port: 5432,
  host: 'localhost',
});

module.exports = pool;