<template>
    <div class="row">
        <b-navbar id="navbar" toggleable="lg" type="dark" class="col-md-12">
            <!-- Le chemin définit dans le href correspond à la valeur de l'attribut path dans la configuration du routes -->
            <!-- <b-navbar-brand :href="'/'">ArmadaCar</b-navbar-brand>     -->
            <router-link :to="'/'" class="navbar-brand">ArmadaCar</router-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <b-nav-item href="#">Historique</b-nav-item>
                        <b-nav-item href="#">Rechercher une course</b-nav-item>
                        <!-- <b-nav-item :href="'/nouveauDeplacement'">Réserver une course</b-nav-item> -->
                        <router-link :to="'/nouvelleCourse'" class="nav-link">Réserver une course</router-link>
                    </b-navbar-nav>
                    
                    <b-nav-item-dropdown :text="`${userFirstName} ${userName}`" right>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Se déconnecter</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
//import {b} from 'bootstrap-vue'
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default {
   data: function() {
       return {
          userFirstName: 'Julien',
          userName: 'LP'
        }
    }
}

</script>