const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ruhrpottmetaller',
  database: 'ruhrpottmetaller_dev',
  password: 'aware impulsive profusely'
});

module.exports = connection;
