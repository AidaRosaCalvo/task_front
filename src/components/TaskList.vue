<!-- TaskList.vue -->
<template>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
   
    <div>
        <h2 class="title">Tareas</h2>
        <form @submit.prevent="addTask" class="form-container">
            <input placeholder="Nombre de la tarea" v-model="name_field" required />
            <button type="submit">Add</button>
        </form>
        <LoadingPage :isLoading="loading" />
        <ul class="task-list">
            <li v-for="task in tasksList" :key="task.id">
                <div>
                    <input type="checkbox" class="task-checkbox" v-model="task.done" @change="updateTask(task)">
                    <label :class="['task-label', { 'done': task.done }]">{{ task.name }}</label>
                </div>
                <div class="buttons-container">
                    <div class="delete-form">
                        <button id="delete_task" @click="deleteTask(task.id)"><span class="material-symbols-outlined">
                                cancel
                            </span></button>
                        <router-link :to="'/task-info/' + task.id" id="info_task"><span class="material-symbols-outlined">
                                info
                            </span></router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import LoadingPage from './LoadingPage.vue';

export default {
    name: 'TaskList',
    components: {
        LoadingPage,
    },
    emits: ['message'],
    data() {
        return {
            tasksList: [],
            name_field: '',
            loading: false,
        };
    },
    methods: {
        //metodo para agregar la tarea
        async addTask() {
            try {
                const response = await this.$axios.post('/tasks', { name_field: this.name_field }); // El segundo parámetro es un JSON que es el request
                this.tasksList.unshift(response.data.task);
                this.name_field = '';
                let message = response.data.message;
                this.$emit('message', message);
            } catch (error) {
                console.error('Error al agregar tarea:', error);
            }
        },
        //metodo para eliminar la tarea
        async deleteTask(taskId) {
            try {
                const response = await this.$axios.delete(`/tasks/${taskId}`);
                this.tasksList = this.tasksList.filter(task => task.id !== taskId); // esto elimina la tarea eliminada de la lista
                // de tarea que se muestran en el visual
                let message = response.data.message;
                this.$emit('message', message);
            } catch (error) {
                console.error('Error al eliminar tarea:', error);
            }
        },

        // Método para actualizar la tarea cuando se marca/desmarca el checkbox
        async updateTask(task) {
            try {
                //El primer parámetro de put es la ruta al igual que todos los métodos y el segundo es el JSON que se
                //envía en el request
                const response = await this.$axios.put(`/tasks/${task.id}`, { name_field: task.name, done_field: task.done });
                let message = response.data.message;
                this.$emit('message', message);
            } catch (error) {
                console.error('Error al actualizar tarea:', error)
            }
        },

        /*async taskInfo(task) {
            this.$router.push({ name: 'task-info', params: { id: task.id } })
        },*/

        //Metodo para inicializar el componente con la lista de tareas
        async fetchTasks() {
            this.toggleLoading();
            try {
                const response = await this.$axios.get('/tasks');
                this.tasksList = response.data;
            } catch (error) {
                console.error('Error al obtener tareas:', error);
            } finally {
                this.toggleLoading();
            }
        },
        toggleLoading() {
            this.loading = !this.loading;
        }

    },
    mounted() {
        this.fetchTasks();
    }
};
</script>

<style>
/* Estilos de la lista */
.task-list {
    list-style-type: none;
    padding: 0;
}


.task-list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 10px;
    margin-top: 10px;
}

.task-list li:last-child {
    border-bottom: none;
}

.task-label {
    font-size: 18px;
    margin-left: 0.8rem;
}

.delete-form {
    margin-left: auto;
    
}

/* Botón de eliminar tarea */
.delete-form #delete_task {
    background-color: #fff;
    color: #e2472c;
    border: none;
    cursor: pointer;
}

/* Botón de ver información de tarea */
.delete-form #info_task {
    background-color: #fff;
    color: #22c550;
    border: none;
    cursor: pointer;
    margin-left: 10px;
}

.delete-form #delete_task:hover {
    color: #ea1d06;    
}

.delete-form #info_task:hover {
    color: green;
}

.done{
    text-decoration: line-through;
    color: grey;
}

.buttons-container {
    display: flex;
}

/* Estilos del formulario */
.title {
    font-size: 24px;
    color: #333;
}

.form-container {
    margin-top: 20px;
}



.form-container input {
    width: 70%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;    
}

.form-container button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.form-container button:hover {
    background-color: #0056b3;
}
</style>