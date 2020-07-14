<template>
<div style="padding-left:10px">   
    <br/>
    <div> 
        <h1><b>Liste des lieux de stockage</b></h1>
    </div>    
    <hr/><br/>
    <div class="row justify-content-between">        
        <div class="input-group col-xl-6">            
            <h5>Filtre sur la ville : </h5>                        
            <b-form-input v-model="searchCity" placeholder="Entrer la ville" id="searchByCity"></b-form-input> 
        </div>        
        <div class=" col-xl-1">
            <router-link :to="{ name: 'addStoragePlace'}"><button type="button" class="btn btn-circle btn-sm"><span class="spanAjout">+</span></button></router-link>
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
                                <router-link :to="{name : 'updateStoragePlace', params: { storagePlace: data.value}}"><img width="25px" height="25px" src="@/assets/images/pencilUpdate.png"></router-link>
                            </div>
                            <div class="col-xl-6">
                              <a @click="handleDeleteStoragePlaceClick(data.value.id, data.value.libelle)"><img width="30px" height="25px" src="@/assets/images/crossDelete.jpg" ></a>                              
                              <b-modal
                                id="removeStoragePlace"
                                title="Suppression du lieu de stockage"                                
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
        argsIdStoragePlaceClicked: null,    
        confirmRemove: "",
        searchCity: '',
        perPage: 6,
        currentPage: 1,
        fields: [
          {
            key: 'libelle',
            label: 'Libellé',
            sortable: true
          },
          {
            key: 'departement',
            label: 'Département',
            sortable: true
          },
          {
            key: 'code_postal',
            label: 'Code postal',
            sortable: true
          },
          {
            key: 'ville',
            label: 'Ville',
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
        return store.state.lieuxStockages.length
      },
      filteredList()
      {                 
          return store.state.lieuxStockages.filter(item => {
              if (this.searchCity.toLowerCase() == "tout")
              {                                                 
                return item
              }
              else{                                                        
                return item.libelle.toLowerCase().includes(this.searchCity.toLowerCase())                  
              }   
        })
      },

    }, 
    methods:{
      handleDeleteStoragePlaceClick(arg1, arg2) {              
        this.confirmRemove = `Voulez-vous supprimer le lieu de stockage ${arg2} ?`
        this.argsIdStoragePlaceClicked = arg1
        this.$bvModal.show("removeStoragePlace")
      },
      okModelButtonClicked() {
        if (this.argsIdStoragePlaceClicked) 
        {                     
          store.dispatch(ACTIONS.DELETE_STORAGE_PLACE, {identifiantStoragePlace: this.argsIdStoragePlaceClicked});
          this.$bvModal.hide("removeStoragePlace")
        }         
      },
      cancelButtonClicked()
      {
        this.$bvModal.hide("removeStoragePlace")
      },
      rowClickedForDetail(items)
      {                              
        this.$router.push({name: 'detailStoragePlace', params: {storagePlace: items[0]}});
      }      
    }
}
</script>

<style>
  #searchByCity{
    margin-left: 10px;
    border-radius: 0.4em;
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