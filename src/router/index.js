import Vue from 'vue';
import Router from 'vue-router';
import HomeComponent from '@/views/Home.vue'
import NewRaceComponent from '@/views/AddCourse.vue'

Vue.use(Router);

//On définit les nouvelles url par rapport aux vues correspondante.
//Création d'un nouvel objet VueRouter
//Les paramètres name et path sont en francais
export default new Router({
    mode: 'history',
    routes: [
        { name: 'nouvelleCourse',
            path: '/nouvelleCourse',
            component: NewRaceComponent
        },
        { name:'accueil',
            path: '/', 
            component: HomeComponent
        }
    ]
})