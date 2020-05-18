<template>
    <b-navbar-nav>                               
        <b-nav-item href="#">Historique</b-nav-item>
        <b-nav-item href="#">Rechercher une course</b-nav-item>                        
        <router-link :to="'/nouvelleCourse'" class="nav-link">Réserver une course</router-link>
    </b-navbar-nav>
</template>