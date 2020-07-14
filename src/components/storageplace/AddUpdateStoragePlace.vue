<template>
  <div id="add-storageplace">
    <br/>
    <div>
      <h1 v-if="this.$route.fullPath.includes('addStoragePlace')==true" id="titre" name="titre"><b>Ajouter un lieu de stockage </b></h1>   
      <h1 v-else id="titre" name="titre"><b>Modifier un lieu de stockage </b></h1> 
    </div>
    <br/>

    <b-container fluid v-if="show">
      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Libellé* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="libelle" v-model="form.libelle" id="input-6" required placeholder="ENI Nantes Parking Sud"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Adresse* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="adresse" v-model="form.adresse" placeholder="6 route des fleurs" id="input-5" required></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Département* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input ref="departement" name="departement" v-model="form.departement" id="input-2" required placeholder="Loire-Atlantique"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>
      
      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Code postal* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="code_postal" id="input-4" v-model="form.code_postal" placeholder="44000" required></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Ville* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="ville" v-model="form.ville" id="input-3" required placeholder="Nantes"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <p v-if="this.error" id="error">{{ error }}</p>

      <b-row id="margin-button">
        <b-col md="1" offset-md="4">
          <b-button type="submit" variant="primary" @click="onSubmit">Valider</b-button>      
        </b-col>
        <b-col md="1" offset-md="1">
          <router-link :to="{name: 'gestionStoragePlace'}"><b-button variant="danger">Annuler</b-button></router-link>
        </b-col>
      </b-row>

    </b-container>  
  </div>
</template>

<script>
import store from '@/store';
import { ACTIONS } from "@/store/actions-definitions";

export default {  
  data() {           
    return {      
      error: "",
      form: {
        departement: this.$route.params.storagePlace == null ? '' : this.$route.params.storagePlace.departement,
        ville: this.$route.params.storagePlace == null ? '' : this.$route.params.storagePlace.ville,      
        code_postal: this.$route.params.storagePlace == null ? '' : this.$route.params.storagePlace.code_postal,
        adresse: this.$route.params.storagePlace == null ? '' : this.$route.params.storagePlace.adresse,
        libelle: this.$route.params.storagePlace == null ? '' : this.$route.params.storagePlace.libelle,
      },        
      show: true
    }      
  },
  methods: {
    onSubmit() {
      const form = this.form;

      var regCp = new RegExp(/^[0-9]{5}$/);
      
      if (!form.libelle || form.libelle === "") {
        this.error = "Veuillez renseigner le libellé";
      } else if (!form.adresse || form.adresse === "") {
        this.error = "Veuillez renseigner l'adresse";
      } else if(!form.departement || form.departement === "") {
        this.error = "Veuillez renseigner le département";
      } else if (!form.code_postal || form.code_postal === "" || regCp.test(form.code_postal) == false) {
        this.error = "Veuillez saisir un code postal à 5 chiffres";
      }else if (!form.ville || form.ville === "") {
        this.error = "Veuillez renseigner la ville";
      } else{   
        if (this.$route.params.storagePlace != null)
        {
            store.dispatch(ACTIONS.UDPATE_STORAGE_PLACE, {        
            departement: form.departement,
            ville: form.ville,
            code_postal: form.code_postal,
            adresse: form.adresse,
            libelle: form.libelle,
            idStoragePlace: this.$route.params.storagePlace.id
          }).then(() => {
            this.$router.push({ name: 'detailStoragePlace', params: { storagePlace: store.state.storagePlace }})   
          })
        }
        else
        {
            store.dispatch(ACTIONS.ADD_STORAGE_PLACE, {        
            departement: form.departement,
            ville: form.ville,
            code_postal: form.code_postal,
            adresse: form.adresse,
            libelle: form.libelle,        
          }).then(() => {
            this.$router.push({ name: 'detailStoragePlace', params: { storagePlace: store.state.storagePlace }})   
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
    #error
  {
    color:red;
  }
</style>