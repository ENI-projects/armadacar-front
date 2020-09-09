import Vue from "vue";
import Vuex from "vuex";
import { MUTATIONS } from "./mutations-definitions";
import { ACTIONS } from "./actions-definitions";
import { fetchAsync, fetcher } from "@/api/fetcher";
import { queries } from "@/api/queries.js";
import { mutations } from "@/api/mutations.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    userId: "",
    courses: [],
    events: [],
    vehicules: [],
    newCourse: [],
    resumeCourse : [],
    car: [],
    idCar: [],
    lieuxStockages: [],
    energies: [],
    isDelete: "",
    users: [],
    storagePlace: [],    
    remarque: "",
    countImmatriculation: "",
    historiqueDeplacements : [],
    historiqueEmprunts : [],
    courseByIdResume: [],    
  },
  mutations: {
    [MUTATIONS.SET_COURSES]: (state, courses) => {
      state.courses = courses;
    },
    [MUTATIONS.SET_EVENTS]: (state, events) => {
      state.events = events;
    },
    [MUTATIONS.SET_VEHICULES]: (state, vehicules) => {
      state.vehicules = vehicules;      
    },
    [MUTATIONS.SET_LIEUX_STOCKAGES]: (state, lieuxStockages) => {
      state.lieuxStockages = lieuxStockages;
    },
    [MUTATIONS.SET_ENERGIES]: (state, energies) => {
      state.energies = energies;
    },
    [MUTATIONS.ADD_EVENT]: (state, event) => {
      state.events.push(event)
    },
    [MUTATIONS.UPDATE_TOKEN]: (state, token) =>{
      state.token = token
    },
    [MUTATIONS.UPDATE_USER_ID]: (state, userId) => {
      state.userId = userId
    },
    [MUTATIONS.ADD_CAR]: (state, car) => {
      state.vehicules.push(car)      
      state.car = car;      
    },
    [MUTATIONS.DELETE_CAR]: (state, isDelete) => {
      state.isDelete = isDelete
    },
    [MUTATIONS.UDPATE_CAR]: (state, car) => {            
      state.vehicules.push(car)      
      state.car = car; 
    },     
    [MUTATIONS.SET_USERS]: (state, users) => {
      state.users = users;
    },
    [MUTATIONS.ADD_STORAGE_PLACE]: (state, storagePlace) => {
      state.lieuxStockages.push(storagePlace)      
      state.storagePlace = storagePlace;      
    },
    [MUTATIONS.DELETE_STORAGE_PLACE]: (state, isDelete) => {
      state.isDelete = isDelete
    },
    [MUTATIONS.UDPATE_STORAGE_PLACE]: (state, storagePlace) => {            
      state.lieuxStockages.push(storagePlace)      
      state.storagePlace = storagePlace; 
    }, 
    [MUTATIONS.ADD_COURSE]: (state, course) => {                  
      state.newCourse = course;      
    },
    [MUTATIONS.SET_ID_CAR]: (state, idCar) => {
      state.idCar = idCar;
    },
    [MUTATIONS.UDPATE_CAR]: (state, car) => {            
      state.vehicules.push(car)      
      state.car = car;      
    },
    [MUTATIONS.ADD_USERS_COURSES]: (state, course) => {      
      state.resumeCourse = course;
    },
    [MUTATIONS.ADD_USERS_COURSES]: (state, course) => {      
      state.resumeCourse = course;
    },
    [MUTATIONS.UPDATE_REMARQUE]: (state, remarque) => {
      state.remarque = remarque
    },
    [MUTATIONS.SET_COUNT_IMMATRICULATION]: (state, countImmatriculation) => {
      state.countImmatriculation = countImmatriculation
    },
    [MUTATIONS.SET_COURSE_DEPLACEMENT]: (state, historiqueDeplacements) => {
      state.historiqueDeplacements = historiqueDeplacements
    },
    [MUTATIONS.SET_COURSE_EMPRUNT]: (state, historiqueEmprunts) => {
      state.historiqueEmprunts = historiqueEmprunts
    },
    [MUTATIONS.SET_COURSE_BY_ID_RESUME]: (state, courseByIdResume) => {
      state.courseByIdResume = courseByIdResume
    },
    [MUTATIONS.SET_ADD_EVENT_TO_LIST_EVENTS]: (state, newEvent) => {
      state.events.push(newEvent)
    }
  },
  actions: {
    [ACTIONS.SET_COURSES]: async (context) => {
      const lastEventList = await fetchAsync(
        context.state.token,
        fetcher,
        queries.selectFourLastCourse
      );      
      var objLastEventList = [];
      lastEventList.data.armadacar_courses.forEach(element => {          
        objLastEventList.push(
          {
            start: element.lieu_depart,
            arrival: element.lieu_arrivee,            
          }          
        )                          
      });
      context.commit(
        MUTATIONS.SET_COURSES,
        objLastEventList
      );      
    },
    [ACTIONS.SET_EVENTS]: async (context) => {
      const eventList = await fetchAsync(
        context.state.token,
        fetcher,
        queries.selectAllCourse
      );      
      var objEvents = [];
      eventList.data.armadacar_courses.forEach(element => {          
        objEvents.push(
          {
            id: element.id,
            title: element.lieu_depart + "-" + element.lieu_arrivee,
            start: element.date_debut,
            end: element.date_fin
          }          
        )                          
      });
      context.commit(
        MUTATIONS.SET_EVENTS,
        objEvents        
      );
    },
    [ACTIONS.SET_VEHICULES]: async (context) => {      
      const vehiculeList = await fetchAsync(
        context.state.token,
        fetcher,
        queries.carsList
      );      
      context.commit(
        MUTATIONS.SET_VEHICULES,
        vehiculeList.data.armadacar_voitures        
      );
    },
    [ACTIONS.SET_LIEUX_STOCKAGES]: async (context) => {
      const storagePlaceList = await fetchAsync(
        context.state.token,
        fetcher,
        queries.storagePlaceList
      );      
      context.commit(
        MUTATIONS.SET_LIEUX_STOCKAGES,
        storagePlaceList.data.armadacar_lieux_de_stockage        
      );
    },
    [ACTIONS.SET_ENERGIES]: async (context) => {
      context.commit(
        MUTATIONS.SET_ENERGIES,        
        [
          { text: 'Choisir', value: null },
          'Diesel', 
          'Essence', 
          'Gaz', 
          'Électrique'
        ]
      );
    },
    [ACTIONS.SET_USERS]: async (context) => {
      context.commit(
        MUTATIONS.SET_USERS,
        // NEXT TIME WILL MAKE REQUEST
        [
          { identifiant: 1, 
            firstname: 'Jean-Michel', 
            name: 'DUPONT',
            email: 'jeanmi@gmail.com',
            phone: '0685749586',
            address: '7 rue des Lilas',
            cp: '44000',
            city: 'Nantes'
          },
          { identifiant: 2, 
            firstname: 'Tony', 
            name: 'Stark',
            email: 'stark.tony@gmail.com',
            phone: '06385974583',
            address: '4 rue Malibu Beach',
            cp: '44000',
            city: 'Nantes'
          },
          { identifiant: 3, 
            firstname: 'Bruce', 
            name: 'Baner',
            email: 'baner.bruce@gmail.com',
            phone: '0635958512',
            address: '4 rue tours des avengers',
            cp: '44000',
            city: 'Nantes'
          
          },
        ]
      );
    },
    [ACTIONS.UPDATE_TOKEN]: (context, token) => {
      context.commit(MUTATIONS.UPDATE_TOKEN, token);
    },
    [ACTIONS.UPDATE_USER_ID]: (context, userId) => {
      context.commit(MUTATIONS.UPDATE_USER_ID, userId);
    },
    [ACTIONS.ADD_EVENT]: async (context, event) => {      
      context.commit(MUTATIONS.ADD_EVENT, event)
    },
    [ACTIONS.ADD_CAR]: async (context, {marque, modele, immatriculation, energie, nombre_de_chevaux, nombre_de_places, id_lieux_de_stockage}) => {
      const addCar = await fetchAsync(
        context.state.token,
        fetcher,
        mutations.insertCar,
        {
          marque, 
          modele, 
          immatriculation, 
          energie, 
          nombre_de_chevaux, 
          nombre_de_places, 
          id_lieux_de_stockage
        }
      );               
      return context.commit(MUTATIONS.ADD_CAR, addCar.data.insert_armadacar_voitures.returning[0]);
    },
    [ACTIONS.UDPATE_CAR]: async (context, {marque, modele, immatriculation, energie, nombre_de_chevaux, nombre_de_places, id_lieux_de_stockage, idVoiture}) => {
      var index = context.state.vehicules.findIndex(car => car.id == idVoiture)
      context.state.vehicules.splice(index, 1)      
      const updateCar = await fetchAsync(
        context.state.token,
        fetcher,
        mutations.updateCar,        
        {
          marque, 
          modele, 
          immatriculation, 
          energie, 
          nombre_de_chevaux, 
          nombre_de_places, 
          id_lieux_de_stockage,
          idVoiture,
          idEntreprise:1
        }
      );                           
      return context.commit(MUTATIONS.UDPATE_CAR, updateCar.data.update_armadacar_voitures.returning[0]);
    },
    async [ACTIONS.DELETE_CAR](context, {identifiant}) {      
      //Permet de récupérer l'index du véhicule de la liste pour le supprimé du store.      
      var index = context.state.vehicules.findIndex(car => car.id == identifiant)      
      context.state.vehicules.splice(index, 1)
      await fetchAsync(
        context.state.token,
        fetcher,                        
        mutations.deleteCar,
        {          
          idVoiture: identifiant
        }
      );
      context.commit(MUTATIONS.DELETE_CAR, false, identifiant);
    },
    [ACTIONS.ADD_STORAGE_PLACE]: async (context, {libelle, adresse, ville, departement, code_postal}) => {
      const addStoragePlace = await fetchAsync(
        context.state.token,
        fetcher,
        mutations.insertStoragePlace,
        {
          libelle, 
          adresse, 
          ville, 
          departement, 
          code_postal, 
        }
      );               
      return context.commit(MUTATIONS.ADD_STORAGE_PLACE, addStoragePlace.data.insert_armadacar_lieux_de_stockage.returning[0]);
    },
    [ACTIONS.UDPATE_STORAGE_PLACE]: async (context, {libelle, adresse, ville, departement, code_postal, idStoragePlace}) => {
      var index = context.state.lieuxStockages.findIndex(storageplace => storageplace.id == idStoragePlace)
      context.state.lieuxStockages.splice(index, 1)      
      const updateStoragePlace = await fetchAsync(
        context.state.token,
        fetcher,
        mutations.updateStoragePlace,        
        {
          libelle, 
          id_entreprise:1, 
          adresse, 
          ville, 
          departement, 
          code_postal, 
          idStoragePlace
        }
      );                           
      return context.commit(MUTATIONS.UDPATE_STORAGE_PLACE, updateStoragePlace.data.update_armadacar_lieux_de_stockage.returning[0]);
    },
    async [ACTIONS.DELETE_STORAGE_PLACE](context, {identifiantStoragePlace}) {      
      //Permet de récupérer l'index du lieu de stockage de la liste pour le supprimé du store.      
      var index = context.state.lieuxStockages.findIndex(storageplace => storageplace.id == identifiantStoragePlace)      
      context.state.lieuxStockages.splice(index, 1)
      await fetchAsync(
        context.state.token,
        fetcher,                        
        mutations.deleteStoragePlace,
        {          
          idStoragePlace: identifiantStoragePlace
        }
      );
      context.commit(MUTATIONS.DELETE_STORAGE_PLACE, false, identifiantStoragePlace);
    },    
    [ACTIONS.ADD_COURSE]: async (context, {dateDebut, dateFin, lieuDepart, lieuArrivee, idVoiture, allerRetour}) => {
      const addCourse = await fetchAsync(
        context.state.token,
        fetcher,
        mutations.insertCourse,
        {
          dateDebut,
          dateFin,
          lieuDepart,
          lieuArrivee,
          idVoiture,
          allerRetour    
        }
      );               
      return context.commit(MUTATIONS.ADD_COURSE, addCourse.data.insert_armadacar_courses.returning[0]);
    },
    [ACTIONS.SET_ID_CAR]: async (context, {dateDebut, nbrePassager}) => {      
      const idCar = await fetchAsync(
        context.state.token,
        fetcher,
        queries.selectIdCarAvailable,
        {
          nbrePassager,
          dateDebut          
        }
      );      
      context.commit(
        MUTATIONS.SET_ID_CAR,
        idCar.data.armadacar_search_course_by_date_and_nbplace[0]
      );
    }, 
    [ACTIONS.ADD_USERS_COURSES]: async (context, objectsPassager) => {            
      await fetchAsync(
        context.state.token,
        fetcher,
        mutations.insertUtilisateursCourses,
        {
          objectsPassager : objectsPassager          
        }
      );
    },
    [ACTIONS.UPDATE_REMARQUE]: async (context, {idCourse, remarque}) => {           
      const updateRemarque = await fetchAsync(
        context.state.token,
        fetcher,
        mutations.updateRemarqueCourse,        
        {
          remarque,
          id: idCourse        
        }
      );                  
      return context.commit(MUTATIONS.UPDATE_REMARQUE, updateRemarque.data.update_armadacar_courses.affected_rows);
    },
    [ACTIONS.SET_COUNT_IMMATRICULATION]: async (context, {immatriculation}) => {                  
      const countImmatriculation = await fetchAsync(
        context.state.token,
        fetcher,
        queries.selectCountImmatriculationExist,
        {
          immatriculation          
        }
      );            
      context.commit(
        MUTATIONS.SET_COUNT_IMMATRICULATION,
        countImmatriculation.data.armadacar_voitures_aggregate.aggregate.count
      );
    },
    [ACTIONS.SET_COURSE_DEPLACEMENT]: async (context, {idUser}) => {
      const historiqueDeplacements = await fetchAsync(
        context.state.token,
        fetcher,
        queries.selectCourseDeplacementsByUser,
        {
          id: idUser
        }
      );            
      context.commit(
        MUTATIONS.SET_COURSE_DEPLACEMENT,
        historiqueDeplacements.data.armadacar_courses
      );
    },
    [ACTIONS.SET_COURSE_EMPRUNT]: async (context, {idUser}) => {
      const historiqueEmprunts = await fetchAsync(
        context.state.token,
        fetcher,
        queries.selectCourseEmpruntsByUser,
        {
          id: idUser
        }
      );            
      context.commit(
        MUTATIONS.SET_COURSE_EMPRUNT,
        historiqueEmprunts.data.armadacar_courses
      );
    },
    [ACTIONS.SET_COURSE_BY_ID_RESUME]: async (context, {idCourse}) => {
      const historiqueEmprunts = await fetchAsync(
        context.state.token,
        fetcher,
        queries.selectCourseResume,
        {
          idCourse: idCourse
        }
      );            
      context.commit(
        MUTATIONS.SET_COURSE_BY_ID_RESUME,
        historiqueEmprunts.data.armadacar_courses[0]
      );
    }
  } 
});