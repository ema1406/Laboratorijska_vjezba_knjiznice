
// Učitavanje potrebnih biblioteka
const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

// Stvaranje Express aplikacije
const app = express();
const PORT = process.env.PORT || 3000;

// Povezivanje s PostgreSQL bazom
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

// Posluživanje HTML, CSS i JavaScript datoteka
app.use(express.static('public'));

// Početna API ruta za dohvaćanje knjižnica
app.get('/api/knjiznice', async (req, res) => {
    try {

        const upit = `SELECT
                k.naziv,
                k.adresa,
                k.postanski_broj,
                k.grad,
                k.zupanija,
                k.telefon,
				k.mail,
                k.web,
                k.vrsta_knjiznice,
                o.naziv as odjel_naziv,
                null as ime,
                null as prezime,
                null as radni_odnos
            FROM knjiznice k 
            LEFT JOIN odjeli o ON k.id = o.id_knjiznice

            UNION ALL

            SELECT
                k.naziv,
                k.adresa,
                k.postanski_broj,
                k.grad,
                k.zupanija,
                k.telefon,
                k.mail,
                k.web,
                k.vrsta_knjiznice,
                null as odjel_naziv,
                z.ime,
                z.prezime,
                z.radni_odnos
            FROM knjiznice k 
            JOIN zaposlenici z ON k.id = z.id_knjiznice

            ORDER BY naziv;`;

        const rezultat = await pool.query(upit);

        res.json(rezultat.rows);

    } catch (error) {

        console.error('Greška pri dohvaćanju podataka:', error);

        res.status(500).json({
            greska: 'Greška pri dohvaćanju podataka iz baze.'
        });
    }
});

// Pokretanje poslužitelja
app.listen(PORT, () => {
    console.log(`Stranica radi na http://localhost:${PORT}`);
});
