
import { obtenirCocktails }  from './modules/requetes.js';
import { afficherCocktails } from './modules/affichage.js';
import { Cocktail }          from './donnees/cocktails.js';
 
 
let tabObjCocktails = [];
 
// ─── Initialisation
 
const initialiser = async () => {
   
    const listeCocktails = await obtenirCocktails();
 
    tabObjCocktails = listeCocktails.map(data => new Cocktail(data));
 
    afficherCocktails(tabObjCocktails);
};
 
// ─── Lister tous les cocktails
 
window.lister = () => {
    afficherCocktails(tabObjCocktails);
};
 
// ─── Lister selon un ingrédient
 
window.listerParIngredient = () => {
    const ingRecherche = prompt('Quel ingrédient cherchez-vous ?');
 
    if (ingRecherche) {
        const recherche = ingRecherche.toLowerCase().trim();
 
        const resultats = tabObjCocktails.filter(c => {
            const ingredients = Array.isArray(c.ingredients)
                ? c.ingredients.join(" ").toLowerCase()
                : c.ingredients.toLowerCase();
 
            return ingredients.includes(recherche);
        });
 
        afficherCocktails(resultats);
    }
};
 
// ─── Lister entre 2 prix
 
window.listerEntreDeuxPrix = () => {
    const minSaisi = prompt('Entrez le prix minimum :');
    const maxSaisi = prompt('Entrez le prix maximum :');
 
    const prixMin = parseFloat(minSaisi);
    const prixMax = parseFloat(maxSaisi);
 
    if (isNaN(prixMin) || isNaN(prixMax)) {
        alert('Erreur : Veuillez entrer des nombres valides.');
        return;
    }
    if (prixMin > prixMax) {
        alert('Erreur : Le prix minimum doit être inférieur au maximum.');
        return;
    }
 
    const resultats = tabObjCocktails.filter(c => c.prix >= prixMin && c.prix <= prixMax);
    afficherCocktails(resultats);
};
 
// ─── Chercher par ID
window.chercherParId = () => {
    const idRecherche = prompt("Entrez l'ID du cocktail :");
    if (idRecherche) {
        const resultats = tabObjCocktails.filter(c =>
            c.id.toString() === idRecherche.trim()
        );
        afficherCocktails(resultats);
    }
};
 
// ─── Chercher par nom
window.chercherParNom = () => {
    const nomRecherche = prompt('Entrez le nom du cocktail :');
 
    if (nomRecherche) {
        const recherche = nomRecherche.toLowerCase().trim();
 
        const resultats = tabObjCocktails.filter(c =>
            c.nom.toLowerCase().includes(recherche)
        );
 
        afficherCocktails(resultats);
    }
};
 
// ─── Trier les cocktails
 
window.trierCocktails = (critere) => {
    if (!critere) return;
    const listeTriee = [...tabObjCocktails];
    if (critere === 'nom') {
        listeTriee.sort((a, b) => a.nom.localeCompare(b.nom));
    } else if (critere === 'prix') {
        listeTriee.sort((a, b) => a.prix - b.prix);
    }
    afficherCocktails(listeTriee);
};
 
// ─── Démarrage
 
document.addEventListener('DOMContentLoaded', initialiser);
 
