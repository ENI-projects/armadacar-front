<template>
  <div>
    <h2 class="titleListActionAdmin">Dernières actions d'administration :</h2>
     <table class="table mb-0">
         <thead class="thead headColor">
            <tr>
            <th colspan="2">Lieux de stockage</th>
            </tr>
        </thead>
         <thead class="thead-light">
            <tr>
            <th>Libelle</th>
            <th>Ville</th>
            </tr>
        </thead>
        <tbody class="tbodyTablePassager">
        <tr v-for="lieuStockage in ListActionLieuStockage" v-bind:key="lieuStockage.libelle">
            <th>{{lieuStockage.libelle}}</th>
            <th>{{lieuStockage.ville}}</th>
        </tr>
        </tbody>
    </table>
    <table class="table mb-0">
         <thead class="thead headColor">
            <tr>
            <th colspan="2">Véhicule</th>
            </tr>
        </thead>
         <thead class="thead-light">
            <tr>
            <th scope="col">Marque</th>
            <th scope="col">Modele</th>
            </tr>
        </thead>
        <tbody class="tbodyTablePassager">
        <tr v-for="voiture in ListActionVehicule" v-bind:key="voiture.modele">
            <th>{{voiture.marque}}</th>
            <th>{{voiture.modele}}</th>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import { ACTIONS } from "@/store/actions-definitions";
export default {    
    computed: {
        ListActionLieuStockage()
        {
            return this.$store.state.lastTwoActionByAdmin.armadacar_lieux_de_stockage
        },
        ListActionVehicule()
        {
            return this.$store.state.lastTwoActionByAdmin.armadacar_voitures
        }
    }
    ,mounted()
    {
        this.$store.dispatch(ACTIONS.SET_LAST_TWO_ACTION_BY_ADMIN);
    }
}
</script>

<style>
.titleListActionAdmin {  
  text-align: center;
}

.headColor{
    background-color: var(--primary);
    text-align: center;
    color: white
}
</style>