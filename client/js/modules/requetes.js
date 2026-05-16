
// Récupérer tous les cocktails
export const listerCocktails = async () => {
    const reponse = await fetch("/cocktails");
    if (!reponse.ok) throw new Error("Erreur lors de la récupération des cocktails.");
    return await reponse.json();
};