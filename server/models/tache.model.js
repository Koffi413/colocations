import db_connection from "~/server/database/database.connexion.js";

class Taches {
    #id
    #libelle
    #date_debut
    #date_fin
    #username
    #status
    #type
    constructor(id,libelle,date_debut,date_fin,username,status,type) {
        this.#id = id;
        this.#libelle = libelle;
        this.#date_debut = date_debut;
        this.#date_fin = date_fin;
        this.#username = username;
        this.#status = status;
        this.#type = type;
    }
    /**
     * Ajouter une tache à un utilisateur en passant en son username en paramètre
     * */
    async ajoutTaches(username){
        const connexion = await db_connection()
        await connexion.execute(
            "INSERT INTO taches (libelle,type,status,date_debut,date_fin,username) values (?,?,?,?,?,?)",[this.#libelle,this.#type,this.#status,this.#date_debut,this.#date_fin,this.#username])
    }
    /**
     * Supprimer une tache (en fonction de son id dans la base de données)
     * */
    async supprimerTaches(){
        const connexion = await db_connection()
        await connexion.execute("DELETE FROM taches where id=?",[this.#id])
    }
    /**
     * Récupère des taches lier à un utilisateur en passant en paramètre son username
     * @param{string} username
     * @return{Array<Taches>}
     * */
    static async trouverTaches(username) {
        const connexion = await db_connection()
        const [taches] = await connexion.execute("SELECT * FROM taches WHERE username=?",[username])
        return taches
    }
    /**
     * Changer l'etat d'une tache ("Terminé","Aucun")
     *@param{string}status
     * @return{Taches}
     * */
    async changerEtat(status){
        const connexion = await db_connection()
        await connexion.execute("UPDATE taches SET status = ? where id = ?",[status,this.#id])
        return this.Taches
    }
    /**
     * Changer le type d'une tâche
     * @param{int}type
     * @return{Taches}
     * */
    async changerType(type){
        await connexion.execute("UPDATE taches SET id_type = ? where id = ?",[type,this.#id])
        return this.Taches
    }
    /**
     * Modifier les dates de debut et fin d'une tache
     * @param{string}date_debut
     * @param{string}date_fin
     * @return{Taches}
     * */
    async changerDate(date_debut,date_fin){
        await connexion.execute("UPDATE taches SET date_debut = ?, date_fin=? where id = ?",[date_debut,date_fin,this.#id])
        return this.Taches
    }
}
export  default (Taches);