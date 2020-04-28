<template>
<div>
        <h2 id="titre">Profil de </h2>   
        <b-container fluid>
            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Prénom : </label> 
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Nom : </label> 
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Email : </label>  
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Téléphone : </label> 
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Adresse : </label> 
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Code postal : </label>   
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Ville : </label>
                </b-col>
                </b-row>
            </b-form-group>

            <router-link :to="{name: 'accueil'}"><b-button variant="primary">Retour</b-button></router-link>
        </b-container>
    </div>
</template>

<script>
/*import UserItem.....
import gql depuis 'graphql-tag' ;  
export const GET_USER= gql ` 
query getUsers {
   users (where: {id: { _eq: 1}}) {
     firstname
     lastname
     email
     phone
     address
     cp
     city  
   }
 }`


 export default {
    components: {
      UserItem,
    },
   apollo: {
     users: {
       // graphql query
       query: GET_USERS,
     },
   },
  }*/

</script>