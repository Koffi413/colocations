import {inscriptionUtilisateur} from "~/server/controllers/utilisateurs.controller.js";

export default defineEventHandler(async (event) => {
    const {username,email,password} = await  readBody(event);
    const utilisateurInscrit = await inscriptionUtilisateur(username,email,password);
    return utilisateurInscrit
})