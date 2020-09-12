<template>
    <div class="divAddCourse">
        <br/>
        <h2 style="text-align:center">Création d'un déplacement</h2>
        <br/>
        <div class="container">
            <div class="row">
                <div class="d-flex justify-content-center col-lg-12">
                    <toggle-button v-model="allerRetour" :value="true" :sync="true" :width="170" :height="40" :font-size="20" :labels="{checked: 'Aller/Retour', unchecked: 'Aller'}"/>                    
                </div>                
            </div>    
        </div>
        <br/>
        <b-container fluid class="containerCourse" v-if="show">
            <b-form-group>
                <b-row class="my-1">
                    <b-col sm="1">
                        <label>Ville départ* : </label>
                    </b-col>
                    <b-col sm="4">
                        <b-form-input ref="depart" v-model="form.villeDepart" id="input-1" required placeholder="Exemple : Nantes, Paris..."></b-form-input>
                    </b-col>
                    <b-col sm="1">
                        <img width="40px" height="40px" src="@/assets/images/double-arrow.png">
                    </b-col>                    
                    <b-col sm="1">
                        <label> Ville arrivée* : </label>
                    </b-col>
                    <b-col sm="4">
                        <b-form-input ref="arrivee" v-model="form.villeArrivee" id="input-2" required placeholder="Exemple : Paris, Nantes..."></b-form-input>
                    </b-col>
                </b-row>
            </b-form-group>
            <br/>
            <b-form-group>
                <b-row class="my-1">
                    <b-col sm="1">
                        <label>Date départ* : </label>                    
                    </b-col>
                    <b-col sm="4">
                        <date-picker :disabledDates="disabledDateAller"  :monday-first="true" v-model="dateDepart.date" :bootstrap-styling="true" :language="language" format="d MMMM yyyy"></date-picker>                        
                    </b-col>                    
                    <b-col sm="1">
                        <label>Date retour* : </label>                        
                    </b-col>
                    <b-col sm="5">                        
                        <date-picker :disabledDates="disabledDateRetour" :monday-first="true" v-model="dateRetour.date" :bootstrap-styling="true" :language="language" format="d MMMM yyyy"></date-picker>                        
                    </b-col>
                </b-row>
            </b-form-group>
            <b-form-group>
                <b-row class="my-1">
                    <b-col sm="1">                                              
                        <label>Heure départ : </label>
                    </b-col>
                    <b-col sm="4">                    
                        <time-selector v-model="heureDepart.heure"></time-selector>
                    </b-col>                    
                    <b-col sm="1">                        
                        <label>Heure retour : </label>
                    </b-col>
                    <b-col sm="5">                                                
                        <time-selector v-model="heureRetour.heure"></time-selector>
                    </b-col>
                </b-row>
            </b-form-group>            
            <b-form-group>
                <b-row class="my-1">
                    <b-col sm="1">
                        <label>Nombre de places :</label>                        
                    </b-col>
                    <b-col sm="4">
                        <b-form-input v-model="form.nombre_de_places" name="nbplaces" type="number" id="input-7" required ></b-form-input>
                    </b-col>                                                                                  
                </b-row>                
                <b-modal
                    id="information"
                    title="Information"
                    @ok="okModelButtonClicked"
                    >
                    <p>{{confirmAddEvent}}</p>
                    </b-modal>
            </b-form-group>  
             <div class="row">
                <div class="d-flex justify-content-center col-lg-11">                    
                    <b-button type="submit" variant="primary" @click="onSubmitCourse">Valider le déplacement</b-button>                    
                </div>                
            </div>
        </b-container>                
    </div>
</template>

<script>
import { ToggleButton } from 'vue-js-toggle-button'
import  Datepicker  from 'vuejs-datepicker';
import Timeselector from 'vue-timeselector';
import {fr} from "vuejs-datepicker/src/locale";
import { BModal, VBModal } from 'bootstrap-vue';
import store from '@/store';
import { ACTIONS } from "@/store/actions-definitions";

export default 
{    
  directives: {    
    'b-modal': VBModal
  },
  components: {
    'toggle-button' : ToggleButton,
    'date-picker' : Datepicker,
    'time-selector' : Timeselector,
    'b-modal': BModal
  },   
  data() {                 
    return {         
        form: {
        },        
        show: true,
        language: fr,          
        modes: ['single'],         
        selectPassager: '',
        selectMode: 'single',
        selected: [],
        fields: [
            {
                key: 'name',
                label: 'Nom'
            },
            {
                key: 'actions', 
                formatter: (value, key, item) => {
                    return item
                },            
                sortable: false                       
            }
        ],
        confirmAddEvent: "",
        arrayTablePassager: [],
        //true pour aller, false pour aller-retour
        allerRetour: true,
        dateDepart: {
            date: ""
        },
        dateRetour: {
            date: ""
        },
        heureDepart: {
            heure: ""
        },
        heureRetour: {
            heure: ""
        }                            
    }      
  },  
  computed: {                  
      disabledDateRetour()
      {
        var state = {
            disabledDates: {
                // to: new Date(2016, 0, 5), // Disable all dates up to specific date
                to: new Date(this.dateDepart.date - 8640000), // Disable all dates after specific date
            }
          }
        return state.disabledDates
      },
      disabledDateAller()
      {
        if (this.dateRetour.date != "")
        {            
            var state = {
                disabledDates: {
                    // to: new Date(2016, 0, 5), // Disable all dates up to specific date
                    from: new Date(this.dateRetour.date - 8640000), // Disable all dates after specific date
                }
            }            
            return state.disabledDates
        }
        else{
            return state
        }        
      }
  },
   methods: {    
    onSubmitCourse(){                        
        this.$nextTick(() => {
            var dateDepart = new Date(this.dateDepart.date);
            var dateRetour = new Date(this.dateRetour.date);
            var heureDepart = new Date(this.heureDepart.heure);
            var heureArrivee = new Date(this.heureRetour.heure);            
            var newFormatDateDepart = dateDepart.getUTCFullYear() + "-" + ("0" + (dateDepart.getUTCMonth()+1)).slice(-2) +"-"+ dateDepart.getUTCDate();
            var newFormatDateRetour = dateRetour.getUTCFullYear() + "-" + ("0" + (dateRetour.getUTCMonth()+1)).slice(-2) +"-"+ dateRetour.getUTCDate();
            var newFormatHeureDepart = heureDepart.getUTCHours()+2 + ":" + heureDepart.getUTCMinutes() +":"+ heureDepart.getUTCSeconds();
            var newFormatHeureRetour = heureArrivee.getUTCHours()+2 + ":" + heureArrivee.getUTCMinutes() +":"+ heureArrivee.getUTCSeconds();

            //Récupère un identifiant de véhicule disponible a la date passé.            
            store.dispatch(ACTIONS.SET_ID_CAR, {
                nbrePassager: this.form.nombre_de_places,
                dateDebut: newFormatDateDepart
            })
            .then(() => {
                if (store.state.idCar != null)
                {                    
                    store.dispatch(ACTIONS.ADD_COURSE, {
                    dateDebut: newFormatDateDepart + "T" + newFormatHeureDepart + "+02:00",
                    dateFin: newFormatDateRetour + "T" + newFormatHeureRetour + "+02:00",
                    lieuDepart: this.form.villeDepart,
                    lieuArrivee: this.form.villeArrivee,
                    idVoiture: store.state.idCar.id,
                    allerRetour: this.allerRetour
                    }).then(() => {                        
                        let objectsPassager = {
                            id_utilisateur: store.state.userId,
                            id_course: store.state.newCourse.id,
                            createur: true
                        }
                        store.dispatch(ACTIONS.ADD_USERS_COURSES, objectsPassager)
                        .then(() => {
                            let newEvent = 
                            {
                                title: this.form.villeDepart + "-" + this.form.villeArrivee,
                                id: store.state.newCourse.id,
                                start: newFormatDateDepart + "T" + newFormatHeureDepart + "+02:00",
                                end: newFormatDateRetour + "T" + newFormatHeureRetour + "+02:00"
                            }
                            store.dispatch(ACTIONS.ADD_EVENT, newEvent)
                            this.$router.push({ name: 'detailCourse', params: { course: store.state.newCourse}});
                        })
                    })
                }
                else{
                    this.confirmAddEvent = `Aucune voiture de disponible pour ce déplacement !`
                    this.$bvModal.show("information")
                }
            });
        })
    },
    okModelButtonClicked(){
        this.$bvModal.hide("information")
    }      
  }    
}
</script>

<style>

@media (min-width: 795px)
{
    .containerCourse {
        padding-left: 150px !important;
    }
}

.vtimeselector__input {  
    padding: 7px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc !important;
    border-radius: 4px;
    box-sizing: border-box;
}

/* Correspond au caractère "+" pour le bouton ajouter sur les pages de Gestions */
.spanAjoutPassager {
    font-size: 50px;
    position: relative;
    top: -26px;
    right: 7.5px;
}

#selectPassager{
    height: 37px !important;
}

.btnAjoutPassager {
    width: 33px !important;
    height: 33px !important;
}

.vtimeselector__clear{
    display: none;
}

@media (min-width: 1098px)
{
    #my-tablePassager{
        margin-top: 30px;
        margin-left: 30px;
    }
}

.divAddCourse{
    z-index: 1000;
    padding-bottom: 50px;
}

.paddingLeft{
        padding-left: 16px;
}
</style>