import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/views/Home.vue'
import NewRaceComponent from '@/views/AddCourse.vue'
import AddUpdateVehiculeComponent from '@/components/vehicule/AddUpdateVehicule.vue'
import DetailVehiculeComponent from '@/components/vehicule/DetailVehicule.vue'
import GestionVehiculeComponent from '@/components/vehicule/VehiculeList.vue'
import ProfileComponent from '@/components/profile/Profile.vue'

Vue.use(VueRouter);

//On définit les nouvelles url par rapport aux vues correspondante.
//Création d'un nouvel objet VueRouter
//Les paramètres name et path sont en francais
export default new VueRouter({
    mode: 'history',
    routes: [
        { name: 'nouvelleCourse',        
            path: '/nouvelleCourse',
            component: NewRaceComponent,                        
        },
        { name:'accueil',
            path: '/', 
            component: HomeComponent
        },
        { name:'addVehicule',
            path: '/admin/gestionVehicule/addVehicule', 
            component: AddUpdateVehiculeComponent,
            props: true,

        },
        { name:'updateVehicule',
            path: '/admin/gestionVehicule/updateVehicule', 
            component: AddUpdateVehiculeComponent,
            props: true
        },
        { name:'detailVehicule',
            path: '/admin/gestionVehicule/detailVehicule', 
            component: DetailVehiculeComponent,
            props: true
        },
        { name:'gestionVehicule',
            path: '/admin/gestionVehicule/', 
            component: GestionVehiculeComponent
        },
        { name:'profie',
            path: '/profile', 
            component: ProfileComponent,
            props: true
        }
    ]
})