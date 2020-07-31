<template>
    <b-navbar-nav>                               
        <router-link :to="'/historique'" class="nav-link">Historique</router-link>
        <b-nav-item href="#">Rechercher un déplacement</b-nav-item>                        
        <router-link :to="'/nouvelleCourse'" class="nav-link">Réserver un déplacement</router-link>
    </b-navbar-nav>
</template>