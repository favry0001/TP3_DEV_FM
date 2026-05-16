

// Référence au conteneur principal des cards
const conteneur = document.getElementById("conteneur-cocktails");


// Générer une card Bootstrap pour un cocktail

const creerCard = (cocktail) => {
    return `
    <div class="col">
        <div class="card h-100 shadow-sm">
            <img 
                src="${cocktail.image}" 
                class="card-img-top" 
                alt="${cocktail.nom}"
                style="height: 220px; object-fit: cover;"
                onerror="this.src='images/placeholder.png'"
            >
            <div class="card-body">
                <h5 class="card-title">${cocktail.id} - ${cocktail.nom}</h5>
                <p class="card-text mb-1">
                    <span class="badge bg-secondary">${cocktail.type}</span>
                </p>
                <p class="card-text mb-1">
                    <strong>Ingrédients :</strong> ${cocktail.ingredients.join(", ")}
                </p>
                <p class="card-text">
                    <strong>Prix :</strong> $${cocktail.prix.toFixed(2)}
                </p>
            </div>
        </div>
    </div>`;
};


// Afficher une liste de cocktails sous forme de cards

export const listerCardsCocktails = (liste) => {
    if (liste.length === 0) {
        conteneur.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-muted fs-5">Aucun cocktail trouvé.</p>
            </div>`;
        return;
    }
    conteneur.innerHTML = liste.map(creerCard).join("");
};


// Filtrer par ingrédient

export const afficherParIngredient = (liste, ingredient) => {
    const terme = ingredient.toLowerCase().trim();
    const resultats = liste.filter(c =>
        c.ingredients.some(i => i.toLowerCase().includes(terme))
    );
    listerCardsCocktails(resultats);
};


// Filtrer entre 2 prix

export const afficherEntrePrix = (liste, prixMin, prixMax) => {
    const min = parseFloat(prixMin);
    const max = parseFloat(prixMax);

    if (isNaN(min) || isNaN(max) || min < 0 || max < 0 || min > max) {
        alert("Veuillez entrer deux prix valides (min ≤ max).");
        return;
    }

    const resultats = liste.filter(c => c.prix >= min && c.prix <= max);
    listerCardsCocktails(resultats);
};


// Chercher par id

export const afficherParId = (liste, id) => {
    const resultat = liste.filter(c => c.id === parseInt(id));
    listerCardsCocktails(resultat);
};


// Chercher par nom

export const afficherParNom = (liste, nom) => {
    const terme = nom.toLowerCase().trim();
    const resultats = liste.filter(c => c.nom.toLowerCase().includes(terme));
    listerCardsCocktails(resultats);
};


// Trier la liste

export const trierCocktails = (liste, critere) => {
    const copie = [...liste];

    switch (critere) {
        case "nom-asc":
            copie.sort((a, b) => a.nom.localeCompare(b.nom));
            break;
        case "nom-desc":
            copie.sort((a, b) => b.nom.localeCompare(a.nom));
            break;
        case "prix-asc":
            copie.sort((a, b) => a.prix - b.prix);
            break;
        case "prix-desc":
            copie.sort((a, b) => b.prix - a.prix);
            break;
        case "id-asc":
            copie.sort((a, b) => a.id - b.id);
            break;
        default:
            break;
    }

    listerCardsCocktails(copie);
};