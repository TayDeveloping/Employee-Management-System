const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    user: 'yourusername',
    password: 'yourpassword',
    database: 'employee_management',
});

client.connect();

module.exports = client;
