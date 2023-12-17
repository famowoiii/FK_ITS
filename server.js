import express from "express";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mysql from "mysql";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });
  
  app.get('/api/ambil/data', (req, res) => {
    connection.query('SELECT * FROM coba', (err, data) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).send('Error fetching data from MySQL');
        return;
      }
      res.json({data});
    });
  });
  
app.post('/api/kirim/data', (req, res) => {
    const {id, name, email } = req.body;
  
    if (!name || !email || !id) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
  
    const insertQuery = 'INSERT INTO coba (id, name, email) VALUES (?, ?, ?)';
    const values = [id, name, email];
  
    connection.query(insertQuery, values, (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        return res.status(500).json({ error: 'Error inserting data into MySQL' });
      }
  
      return res.json({ message: 'Data inserted successfully', userId: results.insertId });
    });
  });

  app.delete('/api/hapus/data/:id', (req, res) => {
    const { id } = req.params;
  
    const deleteQuery = 'DELETE FROM coba WHERE id = ?';

  
    connection.query(deleteQuery, [id], (err, result) => {
    if (err) {
      console.error('Gagal menghapus data: ' + err.message);
      res.status(500).send('Gagal menghapus data');
      return;
    }

    console.log('Data berhasil dihapus');
    res.send('Data berhasil dihapus');
  });
});

app.get('/', (req, res) => {
  res.json(`message: Api berhasil Berjalan`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
