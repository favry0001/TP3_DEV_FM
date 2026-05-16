// const express = require("express");
// const path = require("path");
// const fs = require("fs");

// const app = express();
// const PORT = 3000;


// app.use(express.static(path.join(__dirname, "client")));


// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "index.html"));
// });


// app.get("/cocktails", (req, res) => {
//     const cheminFichier = path.join(__dirname, "serveur", "donnees", "cocktails.json");

//     fs.readFile(cheminFichier, "utf-8", (err, data) => {
//         if (err) {
//             console.error("Erreur lecture cocktails.json :", err);
//             res.status(500).json({ erreur: "Impossible de lire les données." });
//             return;
//         }
//         res.json(JSON.parse(data));
//     });
// });

// // Démarrage du serveur
// app.listen(PORT, () => {
//     console.log(`Serveur démarré sur http://localhost:${PORT}`);
// });







const express = require("express");
const path = require("path");
 
const app = express();
const PORT = 3000;
 
// Fichiers statiques du dossier Client
app.use(express.static(path.join(__dirname, "../Client")));
 
// Route principale
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../Client/index.html"));
});
 
// Route pour envoyer les cocktails
app.get("/cocktails", (req, res) => {
    res.sendFile(path.join(__dirname, "Donnees/cocktails.json"));
});
 
// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});