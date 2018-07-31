/* SETUP de tu entorno local 
https://reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment 
    1. Despues de crear tu app de react a través de create-react-app 
    borra los documentos dentro de la carpeta src.
    2. Crea un archivo index.js (requerido) y un archivo main.css (requerido)
    3. En el archivo index.js (Este mismo) escribe el siguiente "encabezado".
*/
import React from 'react';
import ReactDOM from 'react-dom';

// OVERVIEW 1.1 Qué chihuahuas es React.js
class Board extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
                <div className="row">
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
                <div className="row">
                    <Square/>
                    <Square/>
                    <Square/>
                </div>
            </div>
        );
    }
}
class Square extends React.Component{
    render(){
        return(
            <span>
                <button>____</button>
            </span>
        );
    }
}
class Game extends React.Component{
    render(){
        return (
            <Board/>
        );
    }
}

ReactDOM.render(<Game/>,document.getElementById('root'))