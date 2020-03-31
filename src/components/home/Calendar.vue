<template>
  <div>
    <FullCalendar
          class="demo-app"
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

    <b-modal
      id="confirm"
      title="Confirm"
      @ok="okModelButtonClicked"
    >
      <p>{{confirmAddEvent}}</p>
    </b-modal>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from '@fullcalendar/bootstrap';
import listPlugin from "@fullcalendar/list";
import languagePlugin from "@fullcalendar/core/locales/fr";
import { BModal, VBModal } from 'bootstrap-vue';
import store from '@/store';
import { ACTIONS } from "@/store/actions-definitions";

//import themeChooser from "../../assets/script/theme-chooser";

// must manually include stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/bootstrap/main.css";
import "@fullcalendar/list/main.css"

store.dispatch(ACTIONS.SET_EVENTS);

export default {
  directives: {
    'b-modal': VBModal
  },
  components: {
    FullCalendar, // make the <FullCalendar> tag available
    'b-modal': BModal
  },
  data(){
    return {
      confirmAddEvent: "",
      calendarTheme: 'minty',
      calendarPlugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, bootstrapPlugin ],
      calendarLanguageLocal: languagePlugin,
      calendarEventLimit: true,
      argsEventClicked: null
    }
  },
  computed: {
    calendarEvents: () => store.state.events
  },
  methods: {
    handleDateClick(arg) {
      this.confirmAddEvent = `Would you like to add an event to ${arg.dateStr} ?`
      this.argsEventClicked = arg
      this.$bvModal.show("confirm")
    },
    okModelButtonClicked() {
      if (this.argsEventClicked) {
        store.dispatch(ACTIONS.ADD_EVENT,
        {
          title: "New Event",
          start: this.argsEventClicked.date,
          allDay: this.argsEventClicked.allDay
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