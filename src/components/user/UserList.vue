<template>
<div style="padding-left:10px">   
    <br/>
    <div> 
        <h1><b>Liste des utilisateurs</b></h1>
    </div>    
    <hr/><br/>
    <div class="row justify-content-between">     
        <div class="input-group col-xl-6">                  
          <h5>Filtre sur le nom de l'utilisateur : </h5>                          
          <b-form-input v-model="searchName" placeholder="Entrer le nom" id="searchByName"></b-form-input> 
        </div>           
        <div class=" col-xl-1">
            <router-link :to="{ name: 'addUser'}"><button type="button" class="btn btn-circle btn-sm"><span class="spanAjout">+</span></button></router-link>
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
                                <router-link :to="{name : 'updateUser', params: { user: data.value}}"><img width="25px" height="25px" src="@/assets/images/pencilUpdate.png"></router-link>
                            </div>
                            <div class="col-xl-6">
                              <a @click="handleDeleteUserClick(data.value.name)"><img width="30px" height="25px" src="@/assets/images/crossDelete.jpg" ></a>                              
                              <b-modal
                                id="removeUser"
                                title="Suppression de l'utilisateur"                                
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
            :total-rows="rows"
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

store.dispatch(ACTIONS.SET_USERS);

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
        argsIdUserClicked: null,    
        confirmRemove: "",
        searchName: "",
        perPage: 6,
        currentPage: 1,
        fields: [
          {
            key: 'firstname',
            label: 'Prénom',
            formatter: (value, key, item) => {
              return item.firstname  
            },
            sortable: true            
          },
          {
            key: 'name',
            label: 'Nom',
            formatter: (value, key, item) => {
              return item.name 
            },
            sortable: true
          },
          {
            key: 'email',
            label: 'Email',
            formatter: (value, key, item) => {
              return item.email 
            },
            sortable: true
          },
          {
            key: 'phone',
            label: 'Téléphone',
            formatter: (value, key, item) => {
              return item.phone 
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
      rows() {
        return store.state.users.length
      },
      filteredList()
      {                 
        
          return store.state.users.filter(item => {                            
              if (this.searchName.toLowerCase() == "tout")
              {                
                return item
              }
              else{                                
                return item.name.toLowerCase().includes(this.searchName.toLowerCase())  
              }              
        })
      }, 

    }, 
    methods:{
      handleDeleteUserClick(arg) {        
        this.confirmRemove = `Voulez-vous supprimer l'utilisateur ${arg} ?`
        this.argsIdUserClicked = arg
        this.$bvModal.show("removeUser")
      },
      okModelButtonClicked() {
        if (this.argsIdUserClicked) 
        {                     
          this.$bvModal.hide("removeUser")
          // alert(this.argsIdUserClicked)          
          // store.dispatch(ACTIONS.DELETE_USER,
          // {
          //   id: this.argsIdUserClicked
          // });
        }      
      },
      cancelButtonClicked()
      {
        this.$bvModal.hide("removeUser")
      },
      rowClickedForDetail(items)
      {                              
        this.$router.push({name: 'detailUser', params: {user: items[0]}});
      },    
    }
}
</script>

<style>
  #selectName
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

  #searchByName{
    margin-left: 10px;
    border-radius: 0.4em;
  }

  #searchButton{
    margin-left: 10px;
  }
</style>