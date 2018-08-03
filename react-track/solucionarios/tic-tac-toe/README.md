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
Algo que habrás notado es que el evento se declaró en cammel Case, que las funciones son pasadas como propiedades del componente en la función constructora del componente. 

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
Si hacemos este binding y en nuestro componentes declaramos el evento onclick, cuando clickeamos cada casilla podremos ver un mensaje en consola que dice "holii"

En nuestro juego el siguiente paso es recordar que alguien ha jugado.
Cuando queremos recordar algo en REACT.js utilizamos el estado del componente o `state`. Para hacer uso de estas propiedades, en primer lugar tenemos que mostrarle al componente que existe, todas las propiedades del componente que van a modificarse segun la interacción con el usuario, son realmente partes de su estado. 

En nuestro ejemplo el valor de cada casilla, los turnos, el jugador; todas estas son características del juego que estaremos modificando y deben ser propiedades del estado.

```
class Square extends React.Component{
    constructor(props){
        super(props);
        this.play = this.play.bind(this);
        this.state = {
            value:""
        }
    }
}
```
Cuando queramos que el estado cambie, lo podemos modificar a través del método `this.setState()` que recibe como argumento la nueva configuración del estado: Si quisiera que el nuevo valor fuera `X` modificaría el estado de esta forma `this.setState({value:"X"})`

Para cada movimiento se debe hacer una revisión general del tablero. Pues finalmente hay una cantidad definida de jugadas que hacen a un jugador ganar.

Para recoger datos de multiples hijos, o para permitir que dos componentes hijos se comuniquen entre ellos,
 el estado compartido debe ser parte del constructor del padre. Podríamos tener
un estado para cada componente, sí.
 Sin embargo tenerlo de esta forma hace suceptible a errores. 
El componente padre puede pasar el estado
de vuelta al hijo a través de los `props`.

Elevar el estado al componente padre es una practica comun cuando refactorizamos nuestras aplicaciones en REACT. 

Vamos a intentarlo agregando un constructor al componente `Board`. Declaremos en el constructor el estado inicial del tablero a través de un arreglo con nueve valores nulos: 

```javascript
        constructor(props){
        super(props)

        this.state = {
            squares: Array(9).fill(null)
        }
    }
```
En el componente BOARD vamos a generar una funcion que sea la encargada de pintar los cuadros. 
```javascript
class Board extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            squares: Array(9).fill(null)
        }
        this.renderSquare = this.renderSquare.bind(this)
    }
    renderSquare(i) {
        return <Square value={i} />;
      }
    render(){
        return(
            <div>
                <div className="row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
            </div>
        );
    }
}

```
Ahora vamos a modificar `renderSquare` para "avisarle" a square su estado actual, así como la funcionalidad que se debe cumplir cuando `Square` sea clickeado (Sí, debemos migrar la funcion play del componente Square al componente Board)

```javascript

    play(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
        console.log(this.state.squares)
    }
    renderSquare(i) {
        return <Square value={this.state.squares[i]}
            onClick = {()=>this.play(i)}
         />;
    }
```
Este método está buscando sobre el arreglo de cuadros, el elemento con el numero `i` que nosotras hemos enviado como un argumento. Para después sustituirlo por una X, O o Null segun sea el caso (en este momento solo por X)


Usamos el metodo slice, para trabajar sobre una copia del arreglo existente en el estado y no sobre el original, esto porque la `inmutabilidad` de los componentes en REACT es clave. 

Un componente inmutable, es un componente puro. Si evitamos modificar la data directamente podemos volver a ella en un futuro de ser requerido. Cuando veamos el historial de jugadas, esto te hará más sentido.

Esto también facilita la tarea de REACT para decidir cuando es momento
de modificar algun elemento y sobre todo, no re-pintar elementos
ya existentes. 
[Información que cura: Why inmmutability is important](https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important)



---
Nota al pie: si quieres agregar estilos de css, escribe una propiedad, llamada ClassName en donde van las clases luego llamadas en el main.css de tu carpeta.