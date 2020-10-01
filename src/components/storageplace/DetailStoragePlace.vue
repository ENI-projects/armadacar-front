<template>
    <div style="divStoragePlace">
        <br/>
        <div>
            <h1><b>Détail du lieu de stockage</b></h1>   
        </div>
        <b-container fluid class="textCenter">
            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Libellé : </label> {{ $route.params.storagePlace.libelle }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Adresse : </label> {{ $route.params.storagePlace.adresse }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Département : </label> {{ $route.params.storagePlace.departement }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Code postal : </label>   {{ $route.params.storagePlace.code_postal }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Ville : </label> {{ $route.params.storagePlace.ville }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-row id="margin-button">
                <b-col md="2" offset-md="5">
                    <router-link :to="{name: 'gestionStoragePlace'}"><b-button href = "/" variant="primary">Retour</b-button></router-link>
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

  #divStoragePlace
  {
      padding-left:10px
  }

  #textCenter{
      text-align: center;
  }
</style>