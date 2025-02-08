import Taches from "~/server/models/tache.model.js";
/**
 * Le rôle de ce controlleur est de mettre en relation la vue et le modèle tache
 * 
 * il se chagera du formatage des données reçu depuis le modèle Taches avant de les transmettre à la vue
 * Il gère les fonctionnalités lier au taches
 * 1. Récupération
 * 2. Création
 * 3. Suppression
 * 4. Modification de Taches
 * */

//Étape pour la récupération
// une vérification au préalable pour savoir si l'utilisateur est bien connecté avant d'éffectuer des opérations dur les taches
//1. récupération des taches d'un utilisateur en fonction de son username
//2. formattage du message et envoi du tableau des taches de l'utilisateur
export async function recupererTachesUtilisateur(username){
    const taches = await Taches.trouverTaches(username)
    return taches;
}