const cors = require('cors');

const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors())

app.use(bodyParser.json());

// MySql
const connection = mysql.createConnection({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'b9bd810202aadc',
  password: 'd257bbbf',
  database: 'heroku_ef92cd14c0bcf40'
});



// Route
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// all customers
app.get('/autos/', (req, res) => {
  const sql = 'SELECT * FROM autos';

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('Not result');
    }
  });
});

app.get('/autos/:id', (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM autos WHERE id = ${id}`;
  connection.query(sql, (error, result) => {
    if (error) throw error;

    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('Not result');
    }
  });
});

app.post('/autos/', (req, res) => {
  const sql = 'INSERT INTO autos SET ?';

  const customerObj = {
    nombre: req.body.nombre,
    marca: req.body.marca,
    modelo: req.body.modelo,
    precio: req.body.precio
  };

  connection.query(sql, customerObj, error => {
    if (error) throw error;
    res.send('Auto creado!');
  });
});

app.put('/autos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, marca, modelo, precio } = req.body;
  const sql = `UPDATE autos SET nombre = '${nombre}', marca='${marca}', modelo='${modelo}', precio='${precio}'WHERE id =${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send('Auto actualizado!');
  });
});

app.delete('/autos/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM autos WHERE id= ${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send('Auto eliminado');
  });
});

// Check connect
connection.connect(error => {
  if (error) throw error;
  console.log('Database server running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));