
// Récupérer la liste des cocktails (GET /cocktails) 

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});


app.get('/cocktails', (req, res) => {
   
    fs.readFile(path.join(__dirname, 'serveur', 'donnees', 'cocktails.json'), 'utf8', (err, data) => {
        if (err) return res.status(500).send("Erreur de lecture");
        res.json(JSON.parse(data));
    });
});

app.listen(3000, () => console.log("Serveur lancé sur http://localhost:3000"));