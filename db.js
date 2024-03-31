const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'roundhouse.proxy.rlwy.net',
  user: 'root',
  password: 'mbwaMeJhuyeSTMXOHMSSDjdpNwLjFsSe',
  database: 'railway',
  port: 40062
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão com o banco de dados MySQL estabelecida.');
});

module.exports = connection;