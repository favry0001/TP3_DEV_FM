// Module affichage.js — Gestion de l'affichage DOM des cocktails
 
/**
 * Affiche un tableau d'instances Cocktail dans la zone #zoneCocktails
 * Utilise la méthode obtenirCardCocktail() de chaque instance
 * @param {Cocktail[]} tabObjCocktails
 */
export const afficherCocktails = (tabObjCocktails) => {
    const zone = document.getElementById('zoneCocktails');
 
    if (!tabObjCocktails || tabObjCocktails.length === 0) {
        zone.innerHTML = `
            <div class="col-12">
                <p class="text-center text-muted py-4">Aucun cocktail trouvé.</p>
            </div>`;
        return;
    }
 
    // Chaque instance appelle sa propre méthode obtenirCardCocktail()
    const htmlCards = tabObjCocktails.map(cocktail => cocktail.obtenirCardCocktail()).join('');
    zone.innerHTML = htmlCards;
};