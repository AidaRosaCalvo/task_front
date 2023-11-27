<template>
  <v-app>
    <div id="task-home">
      <div v-if="message">
        <v-dialog v-model="dialog" max-width="600">
          <v-card>
            <v-card-title>Notificación</v-card-title>
            <v-card-text>
              {{ message }}
            </v-card-text>
            <v-card-actions>
              <v-btn @click="closeDialog">Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <TaskList @message="setMessage" />
    </div>
  </v-app>
</template>
  
<script>
import TaskList from '../components/TaskList.vue';

export default {
  name: 'TaskHome',
  components: {
    TaskList
  },
  data() {
    return {
      message: null,
      dialog: false,
    };
  },
  methods: {
    setMessage(message) {
      this.message = message;
      this.showDialog();
    },
    showDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
      this.message = null;
    },
  }
};
</script>
  
<style scoped>
.v-card {
  color: rgb(55, 79, 200);
  background-color: #9da29d;
}
</style>