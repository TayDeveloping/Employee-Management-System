const { Pool } = require('pg');

// Configure the database connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'taylor_employee_db',
  password: 'babygirl',
  port: 5432, 
});

// Export the query method for executing queries
module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end(),
};
