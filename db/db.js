const { Pool } = require('pg');

// Configure the database connection
const pool = new Pool({
  user: 'your-username',
  host: 'localhost',
  database: 'your-database',
  password: 'your-password',
  port: 5432, 
});

// Export the query method for executing queries
module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end(),
};
