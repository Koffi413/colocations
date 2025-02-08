import {recupererTachesUtilisateur} from "~/server/controllers/taches.controller.js";

export default defineEventHandler(async (event) => {
    const {username} = await readBody(event);
    const taches = await recupererTachesUtilisateur(username)
    return taches;
})