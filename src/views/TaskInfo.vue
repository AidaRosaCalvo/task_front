<template>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <LoadingPage :isLoading="loading" />
    <div v-if="task">
        <h1 class="title1" >Task <span class="material-symbols-outlined">
                receipt_long
            </span></h1>
        <p>Título: {{ task.name }}</p>
        <p>Estado: {{ task.done ? 'completed' : 'not completed' }}</p>

        <div>
            <button id="back" @click="backHome()">Regresar</button>
        </div>
       
    </div>
</template>
  
<script>
import axios from 'axios';
import LoadingPage from '@/components/LoadingPage.vue';

export default {
    name: 'TaskInfo',
    components: {
        LoadingPage,
    },
    data() {
        return {
            task: null,
            loading: false,
        }
    },
    methods: {
        async getTask() {
            this.toggleLoading();//Activar la carga antes de la solicitud
            try {
                let taskId = this.$route.params.id;
                const response = await axios.get(`tasks/${taskId}`);
                this.task = response.data;
            } catch (error) {
                console.error('Error al obtener detalles de la tarea:', error);
            } finally {
                this.toggleLoading();//Desactivar la carga despúes de la solicitud
            }
        },
        backHome() {
            this.$router.push("/task")
        },
        toggleLoading() {
            this.loading = !this.loading;
        }
    },
    beforeMount() {
        this.getTask();
    },
};
</script>
  
<style>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;

}

.title1{
    font-size: 24px;
    color: #333;
}

p {
    font-size: 18px;
    margin: 10px 0;
}

#back {
    background-color: #fff;
    color: #007bff;
    border: none;
    cursor: pointer;
    margin-top: 20px;
}

#back:hover {
    color: #0056b3;
}
</style>