<template>
  <div id="add-vehicule">
    <br/>
    <div>
      <h1 v-if="this.$route.fullPath.includes('addVehicule')==true" id="titre" name="titre"><b>Ajouter un véhicule </b></h1>   
      <h1 v-else id="titre" name="titre"><b>Modifier un véhicule </b></h1> 
    </div>
    <br/>

    <b-container fluid v-if="show">
      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Marque* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input ref="brand" name="brand" v-model="form.marque" id="input-2" required placeholder="Exemple : Citroën, Peugeot, Dacia..."></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Modèle* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="model" v-model="form.modele" id="input-3" required placeholder="Exemple : C3, Clio4..."></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Type d'énergie* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-select name="energy" id="input-4" v-model="form.energie" :options="energies" required></b-form-select>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Nombre de chevaux* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="nbhorsepower" v-model="form.nombre_de_chevaux" type="number" id="input-5" required></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Plaque d'immatriculation* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="registrationplaque" v-model="form.immatriculation" id="input-6" required placeholder="Format :  AA-123-AA"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Nombre de place* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="nbplaces" v-model="form.nombre_de_places" type="number" id="input-7" required ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Lieux de stockage* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-select v-model="form.id_lieux_de_stockage">                   
              <option v-for="option in options" :key="option.id" :value="option.id">
              {{option.libelle}}
              </option>
            </b-form-select>
          </b-col>
        </b-row>
      </b-form-group>

      <p v-if="this.error" id="error">{{ error }}</p>

      <b-row id="margin-button">
        <b-col md="1" offset-md="4">
          <b-button type="submit" variant="primary" @click="onSubmit">Valider</b-button>      
        </b-col>
        <b-col md="1" offset-md="1">
          <router-link :to="{name: 'gestionVehicule'}"><b-button variant="danger">Annuler</b-button></router-link>
        </b-col>
      </b-row>

    </b-container>  
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
      error: "",   
      form: {
        marque: this.$route.params.vehicule == null ? '' : this.$route.params.vehicule.marque,
        modele: this.$route.params.vehicule == null ? '' : this.$route.params.vehicule.modele,      
        energie: this.$route.params.vehicule == null ? '' : this.$route.params.vehicule.energie,
        nombre_de_chevaux: this.$route.params.vehicule == null ? '' : this.$route.params.vehicule.nombre_de_chevaux,
        immatriculation: this.$route.params.vehicule == null ? '' : this.$route.params.vehicule.immatriculation,
        nombre_de_places: this.$route.params.vehicule == null ? '' : this.$route.params.vehicule.nombre_de_places,
        id_lieux_de_stockage: this.$route.params.vehicule == null ? '' : this.$route.params.vehicule.id_lieux_de_stockage,
      },        
      show: true
    }      
  },
  computed: {      
    options: () => store.state.lieuxStockages,
    energies: () => store.state.energies    
  },
  methods: {
    onSubmit() {
      const form = this.form;

      var regImmatriculation = new RegExp(/^[A-Z]{2}-[0-9]{3}-[A-Z]{2}$/);

      if (!form.marque || form.marque === "") {
        this.error = "Veuillez renseigner la marque";
      } else if (!form.modele || form.modele === "") {
        this.error = "Veuillez renseigner le modèle";
      }   else if (!form.energie || form.energie === "") {
        this.error = "Veuillez choisir une énergie";
      } else if (!form.nombre_de_chevaux || form.nombre_de_chevaux === "") {
        this.error = "Veuillez renseigner le nombre de chevaux";
      } else if(!form.immatriculation || form.immatriculation === "" || regImmatriculation.test(form.immatriculation) ==false) {
        this.error = "Veuillez renseigner l'immatriculation au format valide";
      } else if (!form.nombre_de_places || form.nombre_de_places === "") {
        this.error = "Veuillez renseigner le nombre de place";
      } else if (!form.id_lieux_de_stockage || form.id_lieux_de_stockage === "") {
        this.error = "Veuillez choisir un lieu de stockage";
      } else{
        if (this.$route.params.vehicule != null)
        {
            store.dispatch(ACTIONS.UDPATE_CAR, {        
            marque: form.marque,
            modele: form.modele,
            immatriculation: form.immatriculation,
            energie: form.energie,
            nombre_de_chevaux: form.nombre_de_chevaux,
            nombre_de_places: form.nombre_de_places,
            id_lieux_de_stockage: form.id_lieux_de_stockage,
            idVoiture: this.$route.params.vehicule.id
          }).then(() => {
            this.$router.push({ name: 'detailVehicule', params: { vehicule: store.state.car }})   
          })
        }
        else
        {
            store.dispatch(ACTIONS.ADD_CAR, {        
            marque: form.marque,
            modele: form.modele,
            immatriculation: form.immatriculation,
            energie: form.energie,
            nombre_de_chevaux: form.nombre_de_chevaux,
            nombre_de_places: form.nombre_de_places,
            id_lieux_de_stockage: form.id_lieux_de_stockage         
          }).then(() => {
            this.$router.push({ name: 'detailVehicule', params: { vehicule: store.state.car }})   
          })  
        }  
      }    
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