// Module requetes.js — Requêtes fetch vers le serveur Node/Express
 
/**
 * Récupère la liste complète des cocktails depuis l'API
 * @returns {Promise<Array>} tableau d'objets cocktail (données brutes JSON)
 */
export const obtenirCocktails = async () => {
    const reponse = await fetch('/cocktails');
    return await reponse.json();
};
 