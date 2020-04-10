<template>
    <div>
        <h2 id="titre">Détail du véhicule</h2>   
        <b-container fluid>
            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Marque : </label> {{ $route.params.vehicule.brand }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Modèle : </label> {{ $route.params.vehicule.model }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Type d'énergie : </label>   {{ $route.params.vehicule.energy }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Nombre de chevaux : </label> {{ $route.params.vehicule.nbhorsepower }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Plaque d'immatriculation : </label> {{ $route.params.vehicule.registrationplaque }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Nombre de place : </label>   {{ $route.params.vehicule.nbplaces }}
                </b-col>
                </b-row>
            </b-form-group>

            <b-form-group>
                <b-row class="my-1">
                <b-col sm="12">
                    <label>Lieux de stockage : </label> {{ $route.params.vehicule.place }}
                </b-col>
                </b-row>
            </b-form-group>

            <router-link :to="{name: 'gestionVehicule'}"><b-button href = "/" variant="primary">Retour</b-button></router-link>
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