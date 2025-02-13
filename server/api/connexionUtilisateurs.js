import {connexionUtilisateur} from "~/server/controllers/utilisateurs.controller.js";

export default defineEventHandler(async (event) => {
    const {username,password} = await  readBody(event);
    const connecter = await connexionUtilisateur(username, password);
    if (!connecter) {
        return {}
    }
    return true
})