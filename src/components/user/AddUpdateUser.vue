<template>
  <div style="padding-left:10px">
    <br/>
    <div>
        <h1 v-if="this.$route.fullPath.includes('addUser')==true"><b>Ajouter un utilisateur </b></h1>   
        <h1 v-else><b>Modifier un utilisateur </b></h1> 
    </div>
    <br/>
    <b-container fluid v-if="show">
      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Prénom* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input v-model="form.firstname" id="firstname" placeholder="Philippe"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Nom* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="name" v-model="form.name" id="name" required placeholder="DELARUE"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Email* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input type="email" name="email" id="email" v-model="form.email" pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]" required placeholder="philippedelarue@gmail.com" ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Numéro de téléphone* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="phone" v-model="form.phone" type="tel" id="phone" required placeholder="0601020304" pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Adresse* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="address" v-model="form.address" id="address" required placeholder="6 rue des fleurs"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Code postal* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="cp" v-model="form.cp" type="text" id="cp" required placeholder="44000" pattern="[0-9]{5}"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-form-group>
        <b-row class="my-1">
          <b-col sm="2">
            <label>Ville* : </label>
          </b-col>
          <b-col sm="8">
            <b-form-input name="city" id="city" v-model="form.city" required placeholder="Nantes"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <p v-if="this.error" id="error">{{ error }}</p>

      <b-row id="margin-button">
        <b-col md="1" offset-md="4">
          <b-button type="submit" variant="primary" @click="onSubmit">Valider</b-button> 
        </b-col>
        <b-col md="1" offset-md="1">   
          <router-link :to="{name: 'gestionUser'}"><b-button variant="danger">Annuler</b-button></router-link>
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
        firstname: this.$route.params.user == null ? '' : this.$route.params.user.first_name,
        name: this.$route.params.user == null ? '' : this.$route.params.user.last_name,      
        email: this.$route.params.user == null ? '' : this.$route.params.user.email,
        phone: this.$route.params.user == null ? '' : this.$route.params.user.phone,
        address: this.$route.params.user == null ? '' : this.$route.params.user.address,
        cp: this.$route.params.user == null ? '' : this.$route.params.user.code_postal,
        city: this.$route.params.user == null ? '' : this.$route.params.user.ville,
      },       
      show: true,   
    } 
  },
  methods: {
    onSubmit() {
      const form = this.form;
      var regCp = new RegExp(/^[0-9]{5}$/);
      var regPhone = new RegExp(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/);
      var regEmail = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/);
      
      if (!form.firstname || form.firstname === "") {
        this.error = "Veuillez renseigner le prénom";
      } else if (!form.name || form.name === "") {
        this.error = "Veuillez renseigner le nom";
      } else if (!form.email || form.email === "" || regEmail.test(form.email) == false) {
        this.error = "Veuillez saisir une adresse mail avec un format valide";
      } else if (!form.phone || form.phone === "" || regPhone.test(form.phone) == false) {
        this.error = "Veuillez saisir un numéro de téléphone à 10 chiffres";
      } else if (!form.address || form.address === "") {
        this.error = "Veuillez renseigner l'adresse";
      } else if (!form.cp || form.cp === "" || regCp.test(form.cp) == false) {
        this.error = "Veuillez saisir un code postal à 5 chiffres";
      } else if (!form.city || form.city === "") {
        this.error = "Veuillez renseigner la ville";
      } else{
        let body = {
            id: "",
            email: form.email,
            first_name: form.firstname,
            last_name: form.name,
            address: form.address,
            ville: form.city,
            phone: form.phone,
            code_postal: form.cp,
            id_entreprise: ""
        }
        if (this.$route.params.user == null){
          store.dispatch(
            ACTIONS.ADD_USER,
            body
          ).then(() => {
              this.$router.push({ name: 'detailUser', params: { user: body }})
          })
        }
        else{
          body.id = this.$route.params.user.id
          store.dispatch(
            ACTIONS.UPDATE_USER, 
            body
          ).then(() => {
              this.$router.push({ name: 'detailUser', params: { user: body }})
          })
        }
      }
    },
  
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