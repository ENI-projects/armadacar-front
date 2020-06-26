<template>
    <b-navbar-nav>                       
        <router-link :to="'/admin/gestionVehicule'" class="nav-link">Gestion des véhicules</router-link>
        <router-link :to="'#'" class="nav-link">Gestion des lieux de stockage</router-link>
        <router-link :to="'/admin/gestionUser'" class="nav-link">Gestion des utilisateurs</router-link>        
    </b-navbar-nav>
</template>