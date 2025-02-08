import db_connection from "~/server/database/database.connexion.js"; //importation connexion à la base données
import bcrypt from 'bcrypt'; // bibliothèque bcrypt hasher les mots de passe


/**
 * Classe Utilisateurs
 * */
class Utilisateurs {
    #username;
    #email;
    #password;

    /**
     * @param {string} username
     * @param {string} email
     * @param {string} password
     */
    constructor(username, email, password) {
        this.#username = username;
        this.#email = email;
        this.#password = password;
    }
    /**
     * Inscription d'un nouvel utilisateur dans la bd
     * @returns{Promise<Utilisateurs|boolean>}
     */
    async inscriptionUtilisateur() {
        /**
         * connexion à la base de donnée
         * */

        const connexion = await db_connection();
        //verifier que l'username et l'email ne sont pas déjà utilitsés
        //hashage password de l'utilisateur avant insertion
        const hashpass = await bcrypt.hash(this.#password, 10)
        //insertion dans la bd
        await connexion.execute ("INSERT INTO utilisateur (username,email,mot_de_passe) values (?,?,?)",[this.#username,this.#email,hashpass])
    }
    /**
     * vérification pour la connexion utilisateur
     * @param {Utilisateurs} utilisateur
     * @param {string}password
     * @return{boolean}
     */
    static async connexionUtilisateur(utilisateur,password) {
        const connexion = await db_connection();
        const match = await bcrypt.compare(password, utilisateur.mot_de_passe);
        if (match) {
            return true
        }
        return false
    }
    /**
     * @returns{{boolean, Utilisateurs[]}}
     * */
    static async trouverUtilisateur(username, email) {
        const connexion = await db_connection();
        const [existe] = await connexion.execute( "SELECT * FROM utilisateur WHERE email = ? or username = ?", [email,username]);
        //si le tableau retourné n'est pas vide alors retourné vrai
        if (existe.length > 0){
            return {trouver:true, user: existe[0]}
        }
        return {trouver:false, user:[]}
    }
}
export default (Utilisateurs);