<template>
    <div class="container divDetailCourse">
        <h2 class="titleResumeDeplacement">Récapitulatif du déplacement</h2> 
        <br/>
        <div class="row">
            <div class="col-lg-6">
                <h4>Aller</h4>
                <p>{{dateDepartChamps}}</p>
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-sm-1 col-1">
                        <img height="130" src="@/assets/images/barreallerretour.jpg">
                    </div>
                    <div class="col-lg-11 col-md-6 col-sm-6 col-6">
                        <span>{{lieuDepart}} {{heureDepartChamps}}</span><br/>
                        <span class="spanPlaceRestante">Place restante : {{placeRestante}}/{{nbPlace}}</span>
                        <hr class="hrSeparationLieu"/>
                        <span>{{lieuArrivee}}</span><br/>                        
                    </div>
                </div>                
            </div>
            <div class="col-lg-5 col-md-12">                
                <h4>Véhicule prêté : </h4>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                        <label>Modèle : {{modeleVehicule}}</label><br/>
                        <label>Immatriculation : {{immatriculation}}</label>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                        <label>Nombre de place : {{nbPlace}}</label>
                    </div>
                </div>                
            </div>                        
        </div>   
        <div class="row">
            <div class="col-lg-6">
                <hr/>
            </div>
        </div>        
        <div class="row">
            <div class="col-lg-6">
                <div v-if="allerRetour = true">
                    <h4>Retour</h4>
                    <p>{{dateRetourChamps}}</p>
                    <div class="row">
                        <div class="col-lg-1 col-md-1 col-sm-1 col-1">
                            <img height="130" src="@/assets/images/barreallerretour.jpg">
                        </div>
                        <div class="col-lg-11 col-md-6 col-sm-6 col-6">
                            <span>{{lieuArrivee}} {{heureRetourChamps}}</span><br/>
                            <span class="spanPlaceRestante">Place restante : {{placeRestante}}/{{nbPlace}}</span>
                            <hr class="hrSeparationLieu"/>
                            <span>{{lieuDepart}}</span><br/>                        
                        </div>
                    </div>                
                </div>                
            </div>
            <div class="col-lg-5 col-md-6 col-sm-5 col-5">
                <h4>Remarques</h4>
                <textarea v-model="remarque" id="remarque" name="remarque" rows="5" cols="68"></textarea><br/>
                
                <b-alert
                    :show="dismissCountDown"
                    dismissible
                    success
                    variant="success"
                    @dismiss-count-down="countDownChanged"
                    >
                    Remarque ajouté !
                </b-alert>
                <button type="button" class="btn btn-primary" @click="AjouterRemarque()">Ajouter</button>
                <br/>                
                <br/>
                <h4>Localisation de la clef :</h4>
                <textarea id="remarque" name="remarque" rows="5" cols="68" readonly>Disponible a l'accueil</textarea>
            </div>
        </div> 
        <br/><br/>
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <router-link :to="{name: 'accueil'}"><button type="button" class="btn btn-success">Retour a l'accueil</button></router-link>
            </div>            
        </div>  
    </div>    
</template>
<script>
import { BAlert } from 'bootstrap-vue';

import store from '@/store';
import { ACTIONS } from "@/store/actions-definitions";

export default{                
    components: {
        'b-alert': BAlert
    },
    data()
    {        
        var dateDepart = new Date(this.$route.params.course.date_debut)     
        var dateRetour = new Date(this.$route.params.course.date_fin)     

        const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};               
        var newFormatDateDepart = dateDepart.toLocaleDateString(undefined, optionsDate)
        var newFormatDateRetour = dateRetour.toLocaleDateString(undefined, optionsDate)        

        var heureDepart = ("0" + dateDepart.getHours()).slice(-2) + "h" + ("0" + dateDepart.getMinutes()).slice(-2)
        var heureRetour = ("0" + dateRetour.getHours()).slice(-2) + "h" + ("0" + dateRetour.getMinutes()).slice(-2)
        var placeRestante = this.$route.params.course.voiture.nombre_de_places - 1//- this.$route.params.course.utilisateurs_courses_aggregate.aggregate.count        
        return {  
            dismissSecs: 3,
            dismissCountDown: 0,   
            remarque: this.$route.params.course.remarque,

            allerRetour: this.$route.params.course.aller_retour, 
            lieuDepart: this.$route.params.course.lieu_depart,
            lieuArrivee: this.$route.params.course.lieu_arrivee,
            modeleVehicule: this.$route.params.course.voiture.modele,
            immatriculation: this.$route.params.course.voiture.immatriculation,
            nbPlace: this.$route.params.course.voiture.nombre_de_places,
            dateDepartChamps: newFormatDateDepart,
            dateRetourChamps: newFormatDateRetour,
            heureDepartChamps: heureDepart,
            heureRetourChamps: heureRetour,
            placeRestante: placeRestante       
        }
    },
    methods: {
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        AjouterRemarque()
        {            
            store.dispatch(ACTIONS.UPDATE_REMARQUE, {
                idCourse: this.$route.params.course.id,                
                remarque: this.remarque
            })
            .then(() => {                
                if (store.state.remarque == 1)
                {                    
                    this.dismissCountDown = this.dismissSecs
                }                
            })                        
        }
    }    
}
</script>
<style>
.titleResumeDeplacement{
    text-align:center
}
.spanPlaceRestante{
    font-size:12px
}

.hrSeparationLieu{
    margin-top:20px;
    border-color: black;
}
.my-custom-scrollbar {
    position: relative;
    height: 93px;
    overflow: auto;
}
.table-wrapper-scroll-y {
    display: block;
}

.tbodyTablePassager{
    font-size: 14px
}

textarea {
    height: 50px;
    font-size: .8rem;
    letter-spacing: 1px;
    padding: 10px;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
}

.divDetailCourse{
    z-index: 1000;
    padding-bottom: 50px;
}
</style>