<template>
    <Header/>
    <h1>Bienvenue sur votre espace de gestion de taches quotidiennes</h1>
    <h2>Nouvel utilisateur / Ancien utilisateur</h2>
    <p>
        <NuxtLink to="/inscription">S'inscrire</NuxtLink> <br><br>
        <NuxtLink to="/connexion">Se connecter</NuxtLink>
    </p>
</template>
<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>