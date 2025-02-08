import {inscriptionUtilisateur} from "~/server/controllers/utilisateurs.controller.js";
import {recupererTachesUtilisateur} from "~/server/controllers/taches.controller.js";

export default defineEventHandler(async (event) => {
    if (!event) {
        return{}
    }
    const {username,email,password} = await  readBody(event);
    const utilisateurInscrit = await inscriptionUtilisateur(username,email,password);
    return utilisateurInscrit
})