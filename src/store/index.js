import Vue from "vue";
import Vuex from "vuex";
import { MUTATIONS } from "./mutations-definitions";
import { ACTIONS } from "./actions-definitions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courses: [],
    events: []
  },
  mutations: {
    [MUTATIONS.SET_COURSES]: (state, courses) => {
      state.courses = courses;
    },
    [MUTATIONS.SET_EVENTS]: (state, events) => {
      state.events = events;
    },
    [MUTATIONS.ADD_EVENT]: (state, event) => {
      state.events.push(event)
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
    [ACTIONS.ADD_EVENT]: async (context, event) => {
      // PUSH ON HASURA BEFORE UPDATE
      context.commit(MUTATIONS.ADD_EVENT, event)
    },
    [ACTIONS.UPDATE_TOKEN]: () => {
      //code to update the user token
    },
    [ACTIONS.UPDATE_USER_ID]: () => {
      //code to update user id
    }
  }
});