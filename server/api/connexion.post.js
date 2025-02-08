import {connexionUtilisateur} from "~/server/controllers/utilisateurs.controller.js";

export default defineEventHandler(async (event) => {
    if (!event) {
        return {}
    }
    const {username,password} = await  readBody(event);
    const connecter = await connexionUtilisateur(username, password);
    if (!connecter) {
        return {}
    }
    return true
})