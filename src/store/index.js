import Vue from "vue";
import Vuex from "vuex";
import { MUTATIONS } from "./mutations-definitions";
import { ACTIONS } from "./actions-definitions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    userId: "",
    courses: [],
    events: [],
    vehicules: [],
    lieuxStockages: [],
    energies: []
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
    }
  },
  actions: {
    [ACTIONS.SET_COURSES]: async (context) => {
      context.commit(
        MUTATIONS.SET_COURSES,
        // NEXT TIME WILL MAKE REQUEST
        [
          {
            start: "Paris",
            arrival: "Nantes"
          },
          {
            start: "Montreal",
            arrival:"Shangai"
          },
          {
            start: "Lune",
            arrival: "Pluton"
          },
          {
            start: "Montreal",
            arrival: "Pôle Nord"
          }
        ]
      );
    },
    [ACTIONS.SET_EVENTS]: async (context) => {
      context.commit(
        MUTATIONS.SET_EVENTS,
        // NEXT TIME WILL MAKE REQUEST
        [
          {
            title: 'All Day Event',
            start: '2020-02-01'
          },
          {
            title: 'Long Event',
            start: '2020-02-07',
            end: '2020-02-10'
          },
          {
            groupId: 999,
            title: 'Repeating Event',
            start: '2020-02-09T16:00:00'
          },
          {
            groupId: 999,
            title: 'Repeating Event',
            start: '2020-02-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2020-02-11',
            end: '2020-02-13'
          },
          {
            title: 'Meeting',
            start: '2020-02-12T10:30:00',
            end: '2020-02-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2020-02-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2020-02-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2020-02-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2020-02-12T20:00:00'
          },
          {
            title: 'Birthday Party',
            start: '2020-02-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2020-02-28'
          }
        ]
      );
    },
    [ACTIONS.SET_VEHICULES]: async (context) => {
      context.commit(
        MUTATIONS.SET_VEHICULES,
        // NEXT TIME WILL MAKE REQUEST
        [
          { identifiant: 1, 
            brand: 'Citroen', 
            model: 'C3',
            energy: 'Essence',
            nbhorsepower: '4',
            registrationplaque: 'XS-396-EF',
            nbplaces: '5',
            place: 'ENI Nantes Parking Nord'
          },
          { identifiant: 2, 
            brand: 'Renault', 
            model: 'Clio',
            energy: 'Essence',
            nbhorsepower: '4',
            registrationplaque: 'XS-396-TR',
            nbplaces: '5',
            place: 'ENI Nantes Parking Sud'
          },
          { identifiant: 3, 
            brand: 'Fiat', 
            model: 'Punto',
            energy: 'Essence',
            nbhorsepower: '4',
            registrationplaque: 'XS-396-AZ',
            nbplaces: '5',
            place: 'ENI Nantes Parking Est'
          },
          { identifiant: 4, 
            brand: 'Citroen', 
            model: 'C3',
            energy: 'Essence',
            nbhorsepower: '4',
            registrationplaque: 'XS-396-EF',
            nbplaces: '5',
            place: 'ENI Nantes Parking Nord'
          },
          { identifiant: 5, 
            brand: 'Renault', 
            model: 'Clio',
            energy: 'Essence',
            nbhorsepower: '4',
            registrationplaque: 'XS-396-TR',
            nbplaces: '5',
            place: 'ENI Nantes Parking Sud'
          },
          { identifiant: 6, 
            brand: 'Fiat', 
            model: 'Punto',
            energy: 'Essence',
            nbhorsepower: '4',
            registrationplaque: 'XS-396-AZ',
            nbplaces: '5',
            place: 'ENI Nantes Parking Est'
          },
          { identifiant: 7, 
            brand: 'Citroen', 
            model: 'C3',
            energy: 'Essence',
            nbhorsepower: '4',
            registrationplaque: 'XS-396-EF',
            nbplaces: '5',
            place: 'ENI Nantes Parking Nord'
          },
          { identifiant: 8, 
            brand: 'Renault', 
            model: 'Clio',
            energy: 'Essence',
            nbhorsepower: '4',
            registrationplaque: 'XS-396-TR',
            nbplaces: '5',
            place: 'ENI Nantes Parking Sud'
          },
          { identifiant: 9, 
            brand: 'Fiat', 
            model: 'Punto',
            energy: 'Essence',
            nbhorsepower: '4',
            registrationplaque: 'XS-396-AZ',
            nbplaces: '5',
            place: 'ENI Nantes Parking Est'
          },
          { identifiant: 10, 
            brand: 'Citroen', 
            model: 'C3',
            energy: 'Essence',
            nbhorsepower: '4',
            registrationplaque: 'XS-396-EF',
            nbplaces: '5',
            place: 'ENI Nantes Parking Nord'
          },
          { identifiant: 11, 
            brand: 'Renault', 
            model: 'Clio',
            energy: 'Essence',
            nbhorsepower: '4',
            registrationplaque: 'XS-396-TR',
            nbplaces: '5',
            place: 'ENI Nantes Parking Sud'
          },
          { identifiant: 12, 
            brand: 'Fiat', 
            model: 'Punto',
            energy: 'Essence',
            nbhorsepower: '4',
            registrationplaque: 'XS-396-AZ',
            nbplaces: '5',
            place: 'ENI Nantes Parking Est'
          },          
        ]
      );
    },
    [ACTIONS.SET_LIEUX_STOCKAGES]: async (context) => {
      context.commit(
        MUTATIONS.SET_LIEUX_STOCKAGES,
        // NEXT TIME WILL MAKE REQUEST
        [          
          'ENI Nantes Parking Nord',
          'ENI Nantes Parking Sud',
          'ENI Nantes Parking Est'
        ]
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
    [ACTIONS.UPDATE_TOKEN]: (context, token) => {
      context.commit(MUTATIONS.UPDATE_TOKEN, token);
    },
    [ACTIONS.UPDATE_USER_ID]: (context, userId) => {
      context.commit(MUTATIONS.UPDATE_USER_ID, userId);
    },
    [ACTIONS.ADD_EVENT]: async (context, event) => {
      // PUSH ON HASURA BEFORE UPDATE
      context.commit(MUTATIONS.ADD_EVENT, event)
    }
  }
});