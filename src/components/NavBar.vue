<template>
    <div class="row">
        <b-navbar id="navbar" toggleable="lg" type="dark" class="col-md-12">                       
            <router-link :to="'/'" class="navbar-brand">ArmadaCar</router-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <div v-if="role.includes('adminentreprise')">
                        <NavbarRoleAdminComponent/>
                    </div>                   
                    <div v-else>
                        <NavbarRoleUserComponent/>
                    </div>                   
                    <b-nav-item-dropdown :text="`${userName}`" right>
                        <b-dropdown-item><router-link :to="'/profil'" class="nav-link" style="color:black">Profil</router-link></b-dropdown-item>
                        <b-dropdown-item @click="logOut()">Se déconnecter</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import NavbarRoleAdminComponent from '@/components/navbar/NavbarRoleAdmin.vue'
import NavbarRoleUserComponent from '@/components/navbar/NavbarRoleUser.vue'
import Vue from 'vue'

export default {            
    data() {                
       return {                     
          userName: Vue.prototype.$keycloak.fullName,
          role :  Vue.prototype.$keycloak.tokenParsed.resource_access["armadacar-frontend-app"].roles
        }
    }    
    ,components: {        
        NavbarRoleAdminComponent,
        NavbarRoleUserComponent        
    },
    methods:{
        logOut(){
            Vue.prototype.$keycloak.logoutFn();
        }
    }
}

</script>

<style>
#navbar{
  background-color: var(--primary);  
}
</style>