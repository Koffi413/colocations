import Utilisateurs from "../models/utilisateur.model.js";

/**
 * Le rôle de ce controlleur est de mettre en relation la vue et le modèle
 * il se chagera du formatage des données reçu depuis le modèle Utilisateur avant de les transmettre à la vue
 * Il gère les fonctionnalités lier à l'utilisateur
 * 1. Inscription
 * 2. Connexion
 * 3. Modification informations (nom d'utilisateur et mot de passe)
 * */

//Étape pour l'inscription d'un utilisateur
//1. instanciation d'un nouvel utilisateur avec ses informations reçu de la vue
//2. vérifier que son username et/ou son email n'existe pas déjà dans la base de données
//3. hasher son mot de passe; étape se réalisant directement dans la methode de la classe avant ajout dans la base de données
//4. vérification qu'il est bien isncrit en effectuant une recher basée sur son nom d'utilisateur
//5. s'il est retrouver envoyer une reponse vraie et l'utilisateur à la vue

//function d'inscription
export async function inscriptionUtilisateur(username,email,password){
    //Etape 1 - instanciation d'un nouvel utilisateur avec ses informations reçu de la vue
    const nouvelUtilisateur = new Utilisateurs(username,email,password);
    //Etape 2 - vérifier que son username et/ou son email n'existe pas déjà dans la base de données
    const rechercheUtilisateur = await Utilisateurs.trouverUtilisateur(username,email);
    if(rechercheUtilisateur.trouver){
        return []
    }
    //Etape 3 - hasher son mot de passe; étape se réalisant directement dans la methode de la classe avant ajout dans la base de données
     await nouvelUtilisateur.inscriptionUtilisateur()
    //Etape 4 - vérification qu'il est bien isncrit en effectuant une recher basée sur son nom d'utilisateur
    const trouverUtilisateur = await Utilisateurs.trouverUtilisateur(username,email);
    if (trouverUtilisateur.trouver){
        const compte = trouverUtilisateur.user
        return compte
    }
}
