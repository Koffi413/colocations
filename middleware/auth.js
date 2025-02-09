import { useWebsiteStore } from '~/stores/dataUsers.store.js'
export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.server) {
        return
    }
    const connecte = useWebsiteStore()

    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
    if (connecte.connecte === true) {
        return navigateTo('/connexion')
    }
})
