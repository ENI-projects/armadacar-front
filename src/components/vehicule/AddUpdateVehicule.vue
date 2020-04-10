<template>
  <div id="add-vehicule">
    <h2 v-if="this.$route.fullPath.includes('addVehicule')==true" id="titre" name="titre">Ajouter un véhicule </h2>   
    <h2 v-else id="titre" name="titre">Modifier un véhicule </h2> 

    <b-form @submit="onSubmit" v-if="show">
    <b-container fluid>
      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Marque* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input ref="brand" name="brand" v-model="form.brand" id="input-2" required placeholder="Exemple : Citroën, Peugeot, Dacia..."></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Modèle* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="model" v-model="form.model" id="input-3" required placeholder="Exemple : C3, Clio4..."></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Type d'énergie* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-select name="energy" id="input-4" v-model="form.energy" :options="energies" required></b-form-select>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Nombre de chevaux* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="nbhorsepower" v-model="form.nbhorsepower" type="number" id="input-5" required></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Plaque d'immatriculation* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="registrationplaque" v-model="form.registrationplaque" id="input-6" required placeholder="Format :  AA-123-AA"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Nombre de place* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="nbplaces" v-model="form.nbplaces" type="number" id="input-7" required ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Lieux de stockage* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-select name="place" id="input-8" v-model="form.place" :options="places" required></b-form-select>
          </b-col>
        </b-row>
      </b-form-group>

      <b-button type="submit" variant="primary">Valider</b-button>      
      <router-link :to="{name: 'gestionVehicule'}"><b-button variant="danger">Annuler</b-button></router-link>

    </b-container>
    </b-form>
  </div>
</template>

<script>
import store from '@/store';
import { ACTIONS } from "@/store/actions-definitions";

store.dispatch(ACTIONS.SET_LIEUX_STOCKAGES);
store.dispatch(ACTIONS.SET_ENERGIES);

export default {  
  data() {            
    return {         
      form: {
        brand: this.$route.params.vehicule == null ? '' : this.$route.params.vehicule.brand,
        model: this.$route.params.vehicule == null ? '' : this.$route.params.vehicule.model,      
        energy: this.$route.params.vehicule == null ? '' : this.$route.params.vehicule.energy,
        nbhorsepower: this.$route.params.vehicule == null ? '' : this.$route.params.vehicule.nbhorsepower,
        registrationplaque: this.$route.params.vehicule == null ? '' : this.$route.params.vehicule.registrationplaque,
        nbplaces: this.$route.params.vehicule == null ? '' : this.$route.params.vehicule.nbplaces,
        place: this.$route.params.vehicule == null ? '' : this.$route.params.vehicule.place,
      },        
      show: true        
    }      
  },
  computed: {      
    places: () => store.state.lieuxStockages,
    energies: () => store.state.energies
  },
  methods: {
    onSubmit() {
      const form = this.form;
      this.$router.push({ name: 'detailVehicule', params: { vehicule: form }})    
    }
  }
}
</script>