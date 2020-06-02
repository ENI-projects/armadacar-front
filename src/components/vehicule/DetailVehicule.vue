<template>
    <div>
        <h2 id="titre">Détail du véhicule</h2>   
        <b-container fluid>
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

            <router-link :to="{name: 'gestionVehicule'}"><b-button variant="primary">Retour</b-button></router-link>
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