# Task List App

Ya antes hiciste un Trello donde podías añadir y quitar tareas de una lista. ¿Recuerdas como tuviste que manejar todos los cambios de la lista a mano? Bueno pues ahora con ReactJs puedes utilizar el poder de ésta biblioteca para que los cambios en la lista se vean reflejados automáticamente. No solo eso, aprenderás a separar los datos de la representación visual de la misma, facilitando su manejo de formas alternativas. Como por ejemplo, guardar los datos directamente en la base de datos en tiempo real [Firebase](https://firebase.google.com/).

![](https://media.giphy.com/media/xTiTnuhyBF54B852nK/giphy.gif)

**Duración:** Para este reto tendrás 2 días en tiempo de clase donde deberás explotar a tus coaches para resolver todas tus dudas, solucionar bugs y aprender todo lo que puedas, así como un fin de semana completo para entregar ese extra que distinga tu producto.
 
Temas a ver en este projecto:

- JSX
- Componentes
- Estado Global(sin Redux)
- create-app
- Firebase (realtime database)
- Deployment
    - [gh-pages](https://www.youtube.com/watch?v=7yA7BGos2KQ)
    - [Firebase](https://firebase.google.com/docs/hosting/deploying)
    - [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
    - [JASF(Just a Simple Folder)](https://neocities.org/)

## Alcances

### Versión 0.1: Usuarios
Te sugerimos comenzar creando un login con Firebase y ReactJs, es mucho más sencillo de lo que parece y te permitirá almacenar las tareas por hacer individualmente para cada usuario.

- _Login_, _Logout_ y Registro de cuenta nueva.
- Almacenar las tareas por hacer de cada usuario de forma independiente.

Puedes encontrar como hacer el login y registro en el siguiente tutorial: [Getting started with Firebase Auth on the Web - Firecasts](https://www.youtube.com/watch?v=-OKrloDzGpU&vl=en).


![](mockups/task-list/v01.png)

### Versión 0.2: Funcionalidad básica.
Tu aplicación deberá de constar de un `input`, un botón de **_add_** y una lista de tareas. Al dar click en agregar se deberá de añadir la tarea en el tope de la lista, estas tareas deberan de quedar almacenadas persistentemente Firebase, puedes ver su eso básico aquí:

- [Getting Started with the Firebase Realtime Database on the Web, Part 1](https://www.youtube.com/watch?v=noB98K6A0TY)
- [Getting Started with the Firebase Realtime Database on the Web, Part 2](https://www.youtube.com/watch?v=dBscwaqNPuk)

Te recomendamos seguir una estructura similar a esta para poder manejar todos los requerimientos sugeridos:

```json
"userid": {
	"tasks": {
		"taskid1": {
			"order": 1,
			"done":false,
			"text": "some task"
		},
		"taskid2": {
			"order": 2,
			"done":true,
			"text": "another task"
		},
		"taskid3": {
			"order": 3,
			"done":false,
			"text": "yet another task"
		},
	}
}
```


![](mockups/task-list/v02.png)

#### Versión 0.2.1: Un toque de UX.
Módifica tu código para que al dar `Enter`, se añada la nueva tarea cual si fuera un click en **_add_**, asegurate de volver el foco sobre el mismo `input` y limpiar el campo, para que el usuario avanzado pueda añadir varias tareas de forma consecutiva.

![](mockups/task-list/v021.png)
### Versión 0.3: Check!
Marca las tareas realizadas con un check, asegurate de guardar el nuevo estado en Firebase.
![](mockups/task-list/v03.png)

### Versión 0.4: Limpieza
Añade un enlace **_delete_** para eliminar las tareas.

![](mockups/task-list/v04.png)

### Versión 1: Edición
- Al hacer click en **_edit_** se deberá de reemplazar la representación de solo lectura de la tarea, por una versión de edición.
- Al dar click en **_save_** se deberá de guardar la nueva versión
- Al dar click en **_cancel_** se deberá de cancelar la edición y volver a su estado anterior.

![](mockups/task-list/v1.png)


### Versión 1.1: Drag and Drop
Un último toque de usabilidad, permite a tu usuario reordenar las tareas por hacer usando Drag and Drop

![](mockups/task-list/v11.png)