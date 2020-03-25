<template>
  <FullCalendar
        class="demo-app-calendar"
        ref="fullCalendar"
        defaultView="dayGridMonth"
        :header="{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        }"     
        :locale="calendarLanguageLocal"
        :plugins="calendarPlugins"      
        :events="calendarEvents"      
        :eventLimit="calendarEventLimit"
        @dateClick="handleDateClick"
        themeSystem="bootstrap"
        themeName="minty"
      />
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from '@fullcalendar/bootstrap';
import listPlugin from "@fullcalendar/list";
import languagePlugin from "@fullcalendar/core/locales/fr";
//import themeChooser from "../../assets/script/theme-chooser";

// must manually include stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/bootstrap/main.css";
import "@fullcalendar/list/main.css"

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },  
  data(){
    return {
          
        calendarTheme: 'minty',
        calendarPlugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, bootstrapPlugin ],
        calendarLanguageLocal: languagePlugin,
        calendarEventLimit: true,
        calendarEvents: [
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
    
    }
  },
  methods : {    
    handleDateClick(arg) {
      if (confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
        this.calendarEvents.push({
          // add new event data
          title: "New Event",
          start: arg.date,
          allDay: arg.allDay
        });
      }
    }
  }     
}

</script>

<style scoped>
  @import 'https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/minty/bootstrap.min.css';
  @import 'https://use.fontawesome.com/releases/v5.0.6/css/all.css';
</style>

<style>
.demo-app {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.demo-app-top {
  margin: 0 0 3em;
}

.demo-app-calendar {
  margin: 0 auto;
  max-width: 900px;
}
</style>