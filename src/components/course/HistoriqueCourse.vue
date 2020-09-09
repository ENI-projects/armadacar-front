<template>
    <div class="container divHistoriqueCourse">
        <br/>
        <h2 class="titleHistorique">Historique</h2>
        <br/><br/>
        <div class="row">
            <div class="col-lg-6">
                <h4 class="textCenter">Liste des déplacements</h4>
                <br/>
                <div class="table-wrapper-scroll-y my-custom-scrollbar-tablesHistorique">
                    <table class="table table-striped mb-0 tablesHistorique">                        
                        <tbody class="tbodyTablePassager">
                        <tr v-for="deplacement in historiqueDeplacements" v-bind:key="deplacement.id">                            
                            <th>{{deplacement.date_debut}} - {{deplacement.date_fin}}</th>                            
                            <th>{{deplacement.lieu_depart}} - {{deplacement.lieu_arrivee}}</th>
                            <th>{{deplacement.aller_retour == true ? "Aller/Retour" : "Aller"}}</th>
                            <th>{{deplacement.modele}}</th>
                        </tr>                        
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-lg-6">
                <h4 class="textCenter">Liste des Emprunts</h4>
                <br/>
                <div class="table-wrapper-scroll-y my-custom-scrollbar-tablesHistorique">
                    <table class=" table table-striped mb-0 tablesHistorique">
                        <tbody class="tbodyTablePassager">
                        <tr v-for="deplacement in historiqueEmprunts" v-bind:key="deplacement.id">                            
                            <th>{{deplacement.date_debut}} - {{deplacement.date_fin}}</th>                            
                            <th>{{deplacement.lieu_depart}} - {{deplacement.lieu_arrivee}}</th>
                            <th>{{deplacement.aller_retour == true ? "Aller/Retour" : "Aller"}}</th>
                            <th>{{deplacement.modele}}</th>
                        </tr>                          
                        </tbody>
                    </table>
                </div>
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

import store from '@/store';
import { ACTIONS } from "@/store/actions-definitions";


export default {    
    data() {        
        store.dispatch(ACTIONS.SET_COURSE_DEPLACEMENT, {idUser : store.state.userId});
        store.dispatch(ACTIONS.SET_COURSE_EMPRUNT, {idUser : store.state.userId});
        return {
        }
    }
    ,computed: {
        historiqueDeplacements()
        {            
            var obj = []
            store.state.historiqueDeplacements.forEach(element => {
                var dateDepart = new Date(element.date_debut)
                var dateRetour = new Date(element.date_fin)

                var newFormatDateDepart = ("0" + dateDepart.getDate()).slice(-2) + "/" + ("0" + dateDepart.getMonth()).slice(-2) + "/" + dateDepart.getFullYear()
                var newFormatDateRetour = ("0" + dateRetour.getDate()).slice(-2) + "/" + ("0" + dateRetour.getMonth()).slice(-2) + "/" + dateRetour.getFullYear()

                obj.push({
                    id: element.id,
                    lieu_depart : element.lieu_depart,
                    lieu_arrivee : element.lieu_arrivee,
                    date_debut: newFormatDateDepart,
                    date_fin : newFormatDateRetour,
                    aller_retour: element.aller_retour,
                    modele: element.voiture.modele,
                })
            });
            return obj
        }
        ,historiqueEmprunts()
        {
            var obj = []
            store.state.historiqueEmprunts.forEach(element => {
                var dateDepart = new Date(element.date_debut)
                var dateRetour = new Date(element.date_fin)

                var newFormatDateDepart = ("0" + dateDepart.getDate()).slice(-2) + "/" + ("0" + dateDepart.getMonth()).slice(-2) + "/" + dateDepart.getFullYear()
                var newFormatDateRetour = ("0" + dateRetour.getDate()).slice(-2) + "/" + ("0" + dateRetour.getMonth()).slice(-2) + "/" + dateRetour.getFullYear()

                obj.push({
                    id: element.id,
                    lieu_depart : element.lieu_depart,
                    lieu_arrivee : element.lieu_arrivee,
                    date_debut: newFormatDateDepart,
                    date_fin : newFormatDateRetour,
                    aller_retour: element.aller_retour,
                    modele: element.voiture.modele
                })
            });
            return obj
        }
    }
}
</script>
<style>
.titleHistorique{
    text-align:center;
    font-weight: bold;
}

.textCenter {
    text-align:center;
}
.divHistoriqueCourse{
    z-index: 1000;
    padding-bottom: 50px;
}

.my-custom-scrollbar-tablesHistorique {
    position: relative;
    height: 300px;
    overflow: auto;
}
.table-wrapper-scroll-y {
    display: block;
}

.tablesHistorique{
     border: 1px solid #dddddd;
}
</style>