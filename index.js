const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 8081;

// Configuration de la base de données PostgreSQL
const pool = new Pool({
    user: 'myuser',
    host: 'localhost',
    database: 'mydatabase',
    password: 'mypassword',
    port: 5432,
});

// Route pour récupérer les produits
app.get('/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur serveur');
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`API en écoute sur le port ${port}`);
});
