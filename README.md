# task_vue

Este repositorio contiene un proyecto de lista de tareas (ToDo) desarrollado con Vue 3. La aplicación permite agregar tareas, eliminarlas, marcar su estado como realizadas y ver los detalles de una tarea específica. La aplicación utiliza `vue-router` para la navegación y `axios` para consumir una API creada en Laravel, la cual se encuentra en otro repositorio de tu cuenta.

## Características

- **Agregar Tarea**: Permite al usuario agregar una nueva tarea a la lista.
- **Eliminar Tarea**: Permite al usuario eliminar una tarea de la lista.
- **Marcar como Realizada**: Permite al usuario cambiar el estado de una tarea a "realizada".
- **Ver Detalles de Tarea**: Permite al usuario ver los detalles de una tarea específica.

## Tecnologías Utilizadas

- **Vue 3**: Framework principal para la construcción de la interfaz de usuario.
- **Vue Router**: Librería de enrutamiento para manejar la navegación dentro de la aplicación.
- **Axios**: Librería para realizar solicitudes HTTP y consumir la API de Laravel.
- **API en Laravel**: Backend para gestionar las tareas (se encuentra en otro repositorio).

## Requisitos Previos

- Node.js y npm instalados.
- API en Laravel configurada y en ejecución.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/AidaRosaCalvo/task_front.git
    cd task_front
    ```

2. Instala las dependencias del proyecto:
    ```sh
    yarn install
    ```

3. Configura el archivo `.env` para apuntar a la URL de tu API de Laravel:

## Ejecución

1. Inicia el servidor de desarrollo:
    ```sh
    yarn serve
    ```

2. Abre tu navegador y navega a `http://localhost:8080` para ver la aplicación en funcionamiento.

## Uso

### Agregar Tarea

1. Ingresa el título de la nueva tarea en el formulario de agregar tarea.
2. Haz clic en "Agregar Tarea".
3. La tarea se agregará a la lista de tareas.

### Eliminar Tarea

1. Haz clic en el botón de eliminar junto a la tarea que deseas eliminar.
2. La tarea se eliminará de la lista.

### Marcar como Realizada

1. Haz clic en el checkbox junto a la tarea que deseas marcar como realizada.
2. El estado de la tarea cambiará a "realizada".

### Ver Detalles de Tarea

1. Haz clic en el título de la tarea para ver sus detalles.
2. Se abrirá una nueva vista mostrando la descripción completa y otros detalles de la tarea.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios (`git commit -m 'Añadir nueva característica'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-caracteristica`).
5. Abre un pull request.
