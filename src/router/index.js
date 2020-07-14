import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/views/Home.vue'
import NewRaceComponent from '@/views/AddCourse.vue'
import AddUpdateVehiculeComponent from '@/components/vehicule/AddUpdateVehicule.vue'
import DetailVehiculeComponent from '@/components/vehicule/DetailVehicule.vue'
import GestionVehiculeComponent from '@/components/vehicule/VehiculeList.vue'
import GestionUserComponent from '@/components/user/UserList.vue'
import AddUpdateUserComponent from '@/components/user/AddUpdateUser.vue'
import DetailUserComponent from '@/components/user/DetailUser.vue'
import AddUpdateStoragePlaceComponent from '@/components/storageplace/AddUpdateStoragePlace.vue'
import DetailStoragePlaceComponent from '@/components/storageplace/DetailStoragePlace.vue'
import GestionStoragePlaceComponent from '@/components/storageplace/StoragePlaceList.vue'

Vue.use(VueRouter);

//On définit les nouvelles url par rapport aux vues correspondante.
//Création d'un nouvel objet VueRouter
//Les paramètres name et path sont en francais
export default new VueRouter({
    mode: 'history',
    routes: [
        { name: 'nouvelleCourse',        
            path: '/nouvelleCourse',
            component: NewRaceComponent
        },
        { name:'accueil',
            path: '/', 
            component: HomeComponent
        },
        { name:'addVehicule',
            path: '/admin/gestionVehicule/addVehicule', 
            component: AddUpdateVehiculeComponent,
            props: true,
            meta: {
                requireBeAdmin: true
            }
        },
        { name:'updateVehicule',
            path: '/admin/gestionVehicule/updateVehicule', 
            component: AddUpdateVehiculeComponent,
            props: true,
            meta: {
                requireBeAdmin: true
            }
        },
        { name:'detailVehicule',
            path: '/admin/gestionVehicule/detailVehicule/', 
            component: DetailVehiculeComponent,
            props: true,
            meta: {
                requireBeAdmin: true
            }
        },
        { name:'gestionVehicule',
            path: '/admin/gestionVehicule/', 
            component: GestionVehiculeComponent,
            meta: {
                requireBeAdmin: true
            }
        },
        { name:'gestionUser',
            path: '/admin/gestionUser/', 
            component: GestionUserComponent,
            meta: {
                requireBeAdmin: true
            }
        },
        { name:'addUser',
            path: '/admin/gestionUser/addUser', 
            component: AddUpdateUserComponent,
            props: true,
            meta: {
                requireBeAdmin: true
            }
        },
        { name:'updateUser',
            path: '/admin/gestionUser/updateUser', 
            component: AddUpdateUserComponent,
            props: true,
            meta: {
                requireBeAdmin: true
            }
        },
        { name:'detailUser',
            path: '/admin/gestionUser/detailUser', 
            component: DetailUserComponent,
            props: true,
            meta: {
                requireBeAdmin: true
            }
        },
        { name:'addStoragePlace',
            path: '/admin/gestionStoragePlace/addStoragePlace', 
            component: AddUpdateStoragePlaceComponent,
            props: true,
            meta: {
                requireBeAdmin: true
            }
        },
        { name:'updateStoragePlace',
            path: '/admin/gestionStoragePlace/updateStoragePlace', 
            component: AddUpdateStoragePlaceComponent,
            props: true,
            meta: {
                requireBeAdmin: true
            }
        },
        { name:'detailStoragePlace',
            path: '/admin/gestionStoragePlace/detailStoragePlace/', 
            component: DetailStoragePlaceComponent,
            props: true,
            meta: {
                requireBeAdmin: true
            }
        },
        { name:'gestionStoragePlace',
            path: '/admin/gestionStoragePlace/', 
            component: GestionStoragePlaceComponent,
            meta: {
                requireBeAdmin: true
            }
        },
    ]
})

