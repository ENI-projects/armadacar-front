<template>
    <div class="divDetailUser">
        <br/>
        <div>
            <h1 v-if="this.$route.fullPath.includes('profil')==true"><b>Profil</b></h1>
            <h1 v-else><b>Détail de l'utilisateur</b></h1>
        </div>
        <b-container fluid class="textCenter"> 
            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Prénom : </label> {{ profileUser.firstname }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Nom : </label> {{ profileUser.name }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Email : </label>   {{ profileUser.email }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Téléphone : </label> {{ profileUser.phone }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Adresse : </label> {{ profileUser.address }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Code postal : </label> {{ profileUser.codePostal }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Ville : </label> {{ profileUser.city }}
                </b-col>
                </b-row>
            </b-form-group>
            <b-modal
                id="errorProfil"
                title="Error"
                @ok="okModelButtonClicked"
            >
              <p>Erreur dans le chargement du profil</p>
            </b-modal>

            <b-row id="margin-button" class="justify-content-center">
                <router-link v-if="this.$route.fullPath.includes('profil')==true" :to="{name: 'accueil'}"><b-button variant="primary">Accueil</b-button></router-link>
                <router-link v-else :to="{name: 'gestionUser'}"><b-button variant="primary">Retour</b-button></router-link>

                <router-link target="_blank" v-if="this.$route.fullPath.includes('profil')==true" :to="{name: 'changerMotDePasse'}">
                    <b-button style="margin-left: 20px" variant="danger">Changer le mot de passe</b-button>
                </router-link>
            </b-row>
        </b-container>

    </div>
</template>

<script>
import { BModal, VBModal } from 'bootstrap-vue';

export default{
    directives: {    
        'b-modal': VBModal
    },
    components: {    
        'b-modal': BModal
    },      
    data(){
        return {
            profileUser : {}
        }
    },
    mounted()
    {        
        this.$keycloak.loadUserProfile()
        .success(val => 
        {            
            //Permet de remplacer l'item en position 1 (o dans le tableau)
            if (this.$route.params.user != null)
            {
                this.profileUser =
                {                    
                    firstname : this.$route.params.user.firstname,
                    name : this.$route.params.user.name,
                    email :  this.$route.params.user.email,
                    city : this.$route.params.user.city,
                    codePostal : this.$route.params.user.cp ,
                    address : this.$route.params.user.address,
                    phone : this.$route.params.user.phone
                }
            }
            else{                
                this.profileUser =
                {                
                    firstname : val.firstName,
                    name : val.lastName,
                    email : val.email,
                    city : val["attributes"].city != null ? val["attributes"].city[0] : "Aucune ville de renseignée",
                    codePostal : val["attributes"].code_postal != null ? val["attributes"].code_postal[0] : "Aucun code postal de renseigné",
                    address : val["attributes"].address != null ? val["attributes"].address[0] : "Aucune adresse de renseignée",
                    phone : val["attributes"].phone != null ? val["attributes"].phone[0] : "Aucun téléphone de renseignée",
                }
            }            
            return this.profileUser
        })
        .error(val => {            
            console.log(val);
            this.$bvModal.show("errorProfil")
        });
    },
    methods:{
        okModelButtonClicked()
        {
            this.$router.push({ name: 'accueil'});
        }
    }
}
</script>
<style>
  /* Permet de mettre le titre et les boutons au milieu */
  #margin-button
  {
    margin-bottom:50px;
  }

  #textCenter{
      text-align:center
  }

  #divDetailUser{
      padding-left:10px
  }
</style>
