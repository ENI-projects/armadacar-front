<template>
<div style="padding-left:10px">   
    <br/>
    <div> 
        <h1><b>Liste des véhicules</b></h1>
    </div>    
    <hr/><br/>
    <div class="row justify-content-between">        
        <div class="input-group col-xl-6">            
            <h5>Filtre sur lieux de stockage : </h5>                        
            <select v-model="search" class="custom-select custom-select-sm" id="selectLieuStockage">
                <option>Tout</option>
                <option v-for="option in options" v-bind:key="option.id">
                  {{option.libelle}}
                </option>
            </select>
        </div>        
        <div class=" col-xl-1">
            <router-link :to="{ name: 'addVehicule'}"><button type="button" class="btn btn-circle btn-sm"><span class="spanAjout">+</span></button></router-link>
        </div>
    </div>
    <hr/><br/>
    <div class="row">
        <div class="col-12 overflow-auto">
            <b-table
            selectable
            :select-mode="selectMode"            
            id="my-table"
            class="table-striped"
            :items="filteredList"
            :per-page="perPage"            
            :current-page="currentPage"
            :fields="fields"
            @row-selected="rowClickedForDetail"
            >
              <template v-slot:cell(actions)="data">
                  <div class="row">
                            <div class="col-xl-6">                              
                                <router-link :to="{name : 'updateVehicule', params: { vehicule: data.value}}"><img width="25px" height="25px" src="@/assets/images/pencilUpdate.png"></router-link>
                            </div>
                            <div class="col-xl-6">
                              <a @click="handleDeleteVehiculeClick(data.value.id, data.value.immatriculation)"><img width="30px" height="25px" src="@/assets/images/crossDelete.jpg" ></a>                              
                              <b-modal
                                id="removeVehicule"
                                title="Suppression du véhicule"                                
                                @ok="okModelButtonClicked"       
                                @cancel="cancelButtonClicked"             
                                @close="cancelButtonClicked"
                              >                              
                                <p>{{confirmRemove}}</p>
                              </b-modal>                                
                            </div>
                        </div>
              </template>
            </b-table>    
        <b-pagination   
            aria-controls="my-table"         
            v-model="currentPage"
            :total-rows="filteredList.length"
            :per-page="perPage"
            first-text="Premier"
            prev-text="Prec"
            next-text="Suiv"
            last-text="Dernier"></b-pagination>
        </div>
    </div>
    
</div>
</template>
<script>
import { BModal, VBModal } from 'bootstrap-vue';
import store from '@/store';
import { ACTIONS } from "@/store/actions-definitions";

export default 
{        
    directives: {
      'b-modal': VBModal
    },
    components: {    
      'b-modal': BModal
    },
    data() {           
      return {    
        modes: ['single'],
        argsIdVehiculeClicked: null,    
        confirmRemove: "",
        search: 'Tout',
        perPage: 6,
        currentPage: 1,
        fields: [
          {
            key: 'immatriculation',
            label: 'Immatriculation'
          },
          {
            key: 'marque_modele',
            label: 'Marque/Modele',
            formatter: (value, key, item) => {
              return item.marque + " " + item.modele
            },
            sortable: true
          },
          {
            key: 'libelle',
            label: 'Lieux de stockage',
            formatter: (value, key, item) => {
              return item.lieux_de_stockage.libelle
            },
            sortable: true            
          },
          {
            key: 'actions', 
            formatter: (value, key, item) => {
              return item
            },            
            sortable: false                       
          }
        ],
        selectMode: 'single',
        selected: []
      }
    },
    //Computed permet un traitement de l'information dynamiquement (si store).
    //Permet aussi d'initialiser une nouvelle variable par rapport à une fonction
    computed: {            
      options: () => {
        return store.state.lieuxStockages
      },
      filteredList()
      {                 
          return store.state.vehicules.filter(item => {
              if (this.search.toLowerCase() == "tout")
              {                                                 
                return item
              }
              else{                                                        
                return item.lieux_de_stockage.libelle.toLowerCase().includes(this.search.toLowerCase())                  
              }   
        })
      },

    }, 
    methods:{
      handleDeleteVehiculeClick(arg1, arg2) {              
        this.confirmRemove = `Voulez-vous supprimer le véhicule ${arg2} ?`
        this.argsIdVehiculeClicked = arg1
        this.$bvModal.show("removeVehicule")
      },
      okModelButtonClicked() {
        if (this.argsIdVehiculeClicked) 
        {                     
          store.dispatch(ACTIONS.DELETE_CAR, {identifiant: this.argsIdVehiculeClicked});
          this.$bvModal.hide("removeVehicule")
        }         
      },
      cancelButtonClicked()
      {
        this.$bvModal.hide("removeVehicule")
      },
      rowClickedForDetail(items)
      {                              
        this.$router.push({name: 'detailVehicule', params: {vehicule: items[0]}});
      }      
    },
    mounted(){
      store.dispatch(ACTIONS.SET_VEHICULES);
      store.dispatch(ACTIONS.SET_LIEUX_STOCKAGES);
    }
}
</script>

<style>
  #selectLieuStockage
  {
    margin-left: 10px;
    border-radius: 5px;
  }

  .btn-circle.btn-sm { 
    width: 40px; 
    height: 40px;   
    border-radius: 60px;   
    background-color: var(--secondary);
    border-color: var(--secondary);
  } 

  /* Correspond au caractère "+" pour le bouton ajouter sur les pages de Gestions */
  .spanAjout {
    font-size: 50px;
    position: relative;
    top: -22px;
    right: 3.5px;
  }

  /* Modifie la couleur du bouton sélectionné dans la barre de pagination. */
  .page-item.active .page-link{
    background-color: var(--secondary) !important;
    border-color: var(--secondary) !important;
  }

  /* Permet de modifier la couleur de la pagination lors du passage de la souris */
  .pagination .page-item .page-link:hover{
    background-color: var(--secondary) !important;
    border-color: var(--secondary) !important;
  }
</style>