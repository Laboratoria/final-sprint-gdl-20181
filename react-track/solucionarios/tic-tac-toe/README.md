### Tres en línea. 

> Este tutorial está diseñado para aquellas personas que prefieren aprender
> haciendo.
>
> Si quieres un poco más de teoría, puedes visitar la documentación 
> extendida con [los conceptos principales y ejercicios de prueba para cada uno](https://reactjs.org/docs/hello-world.html)
>

Dividiremos este tutorial en cuatro secciones principales:
1. Configuración de una aplicación de REACT.js
#### Overview

##### Overview 1.1 ¿Qué chihuahuas es react?

React es una herramienta que permite crear interfaces de usuario eficientes e inteligentes
a través de pequeñas `piezas de lego` llamadas `COMPONENTES`.
Los componentes son creados en REACT.js a través de clases (Siempre con la primera letra en mayúsculas y Cammel Case) declarando que esta nueva clase será un COMPONENTE de REACT (React.Component).

```javascript
    class SoyUnaClase extends React.Component{}
```
Para nuestro tutorial declararemos tres componentes, aquí su descripción:
1. `Square` (Casilla) pinta un elemento `button`. 
2. `Board` (tablero), dibuja nueve cuadros o componentes square. 
3. `Game` Componente principal que pinta el tablero. 
(Aquí podriamos agregar los nombres de jugadores, puntuaciones, etc)


> Utilizamos la palabra `pinta` para el método 
> `render`, este se encarga de pintar en el `DOM VIRTUAL`
> Piezas de la ReactJS app. 

Si utilizas el comando `npm start` en este punto
podrás notar que en tu navegador se ve en blanco. 
REACT, requiere que especifiques el elemento padre
que vas a pintar en tu navegador. 
En el caso de nuestra aplicación, este elemento es el componente `Game`. 

Para decirle a REACT que este es el componente que queremos mostrar
hasta la ultima linea de nuestro index.js hacemos uso del método. `ReactDOM.render`, 
el cual recibe un elemento destino del HTML 
que por convención llamamos `root` (raíz, en español)
y el componente. 

```jsx
    ReactDOM.render(<Game/>,document.getElementById('root'))
```
Agregando esto a nuestro `index.js` podremos ver algo similar a esto en nuestro navegador: 

![render inicial del componente game](.\docs\imagenes\render-inicial-componente-game.png)

---
#### OVERVIEW 1.2 Propiedades (props para les amigues)

La información en REACT se trasmite a través de propiedades del componente, a las cuales se les da valor desde
el lugar donde el mismo componente es "llamado o ejecutado".

Es similar a cuando hacemos la ejecución de una función y pasamos `argumentos` que son cachados
en la definicion de la función en la forma de `parámetros`.

Esto aplicado a componentes se vería así: 

```jsx
    /*Componente ancestro <Board>*/
    class Board extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    <Square value = "uno"/>
                    
                </div>
            <div/>
            )
        }
    }
```
Aquí podriamos decir que estamos haciendo la ejecución de una
funcion y "value" actua como un argumento, con valor "uno"

##### Componente descendiente `<Square/>`

```
class Square extends React.Component{

    render(){
        return(
            <span>
                <button>{this.props.value}</button>
            </span>
        );
    }
}
```
En el componente `Square` se recibe el argumento `value` 
el cual se aloja en la función constructor y tenemos que especificar que vamos a
acceder a esta propiedad con el método `super()`

> `super() y constructor()` son funciones propias de todos los componentes de REACT, son funciones `heredadas`
al instanciar la clase con React.Component <3 

#### OVERVIEW 1.3 Componentes interactivos (Eventos en REACT.js)

Agregar interactividad a un componentes es muy similar a
cuando lo hacemos con JS vainilla o cuando comenzamos
a trabajar con eventos. 

Recuerda que los componentes de REACT, se crean y actualizan al usar el metodo `render` de forma dinámica sobre un DOM virtual (como un holograma)

Gracias a esta propiedad usualmente en REACT, evitamos la asignación de eventos a través del famoso `addEventListener`.
Declarando los eventos en el momento que pintamos el componente.
```html
    <Square onClick={callbackClick} onBlur={calbackBlur}/>
``` 
Algo que habrás notado es que el evento se declaró en cammel Case, que las funciones son pasadas como propiedades del componente 

```javascript
    // En el constructor de Square haces el enlace de las callback que ocupara el componente. 

    constructor(props){
        super(props);
        this.play = this.play.bind(this)
    }
    play(){
        console.log("holiiiiiii")
    }
``` 



---
Nota al pie: si quieres agregar estilos de css, escribe una propiedad, llamada ClassName en donde van las clases luego llamadas en el main.css de tu carpeta.