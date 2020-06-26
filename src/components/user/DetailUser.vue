<template>
    <div style="padding-left:10px">
        <br/>
        <div>
            <h1><b>Détail de l'utilisateur</b></h1>   
        </div>
        <b-container fluid>
            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Prénom : </label> {{ $route.params.user.firstname }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Nom : </label> {{ $route.params.user.name }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Email : </label>   {{ $route.params.user.email }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Téléphone : </label> {{ $route.params.user.phone }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Adresse : </label> {{ $route.params.user.address }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Code postal : </label>   {{ $route.params.user.cp }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Ville : </label> {{ $route.params.user.city }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-row id="margin-button">
                <b-col md="1" offset-md="5">
                    <router-link :to="{name: 'gestionUser'}"><b-button href = "/" variant="primary">Retour</b-button></router-link>
                </b-col>
            </b-row>    
        </b-container>

    </div>
</template>

<script>

export default{
    data(){                
        return {
            
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
</style>