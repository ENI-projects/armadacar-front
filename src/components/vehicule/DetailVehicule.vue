<template>
    <div style="padding-left:10px">
        <br/>
        <div>
            <h1><b>Détail du véhicule</b></h1>   
        </div>
        <b-container fluid class="containerDetailVehicule">
            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Marque : </label> {{ $route.params.vehicule.marque }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Modèle : </label> {{ $route.params.vehicule.modele }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Type d'énergie : </label>   {{ $route.params.vehicule.energie }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Nombre de chevaux : </label> {{ $route.params.vehicule.nombre_de_chevaux }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Plaque d'immatriculation : </label> {{ $route.params.vehicule.immatriculation }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Nombre de place : </label>   {{ $route.params.vehicule.nombre_de_places }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Lieux de stockage : </label> {{ $route.params.vehicule.lieux_de_stockage.libelle }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-row id="margin-button">
                <b-col md="2" offset-md="5">
                    <router-link :to="{name: 'gestionVehicule'}"><b-button href = "/" variant="primary">Retour</b-button></router-link>
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

  .containerDetailVehicule{
      text-align: center;
  }
</style>