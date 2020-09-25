<script>
import FullCalendar from "@fullcalendar/vue";
//import corePlugin from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from '@fullcalendar/bootstrap';
//import listPlugin from "@fullcalendar/list";
import languagePlugin from "@fullcalendar/core/locales/fr";
import store from '@/store';
import { ACTIONS } from "@/store/actions-definitions";

export default {  
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data(){
    return {
      confirmAddEvent: "",
      calendarTheme: 'minty'
    }
  },
  methods: {
    handleEventClick(clickInfo) {
      store.dispatch(ACTIONS.SET_UTILISATEUR_COURSE, {idCourse: clickInfo.event.id});
      store.dispatch(ACTIONS.SET_COURSE_BY_ID_RESUME, {
        idCourse: clickInfo.event.id
      }).then(() => {
        let isCreator = store.state.userIsCreator
        this.$router.push({ name: 'detailCourse', params: { course: store.state.courseByIdResume, isCreator : isCreator}});
      })
    },
    prepareOptions() {
      return {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        plugins: [
          interactionPlugin,
          dayGridPlugin,
          timeGridPlugin,      
          bootstrapPlugin
        ],
        initialView: 'dayGridMonth',
        editable: true,
        selectable: true,
        dayMaxEvents: true,
        weekends: true,
        themeSystem: 'boostrap',
        locale: languagePlugin,
        eventClick: this.handleEventClick,
        events: store.state.events
      };
    }
  },
  mounted() { 
    store.dispatch(ACTIONS.SET_EVENTS);
  }
}

</script>

<template>
  <div>
    <FullCalendar
      class="demo-app-calendar"
      :options='prepareOptions()'
    />
  </div>
</template>

<style>
  @import 'https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/minty/bootstrap.min.css';
  @import 'https://use.fontawesome.com/releases/v5.0.6/css/all.css';

  .demo-app-calendar {
    padding-top: 10px;
    padding-bottom: 50px;
    padding-right: 10px;    
  }

  .demo-app {
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 14px;
  }

  .fc-toolbar-title {
    text-transform: capitalize;
  } 
</style>