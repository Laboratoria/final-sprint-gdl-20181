import React from 'react';
import ReactDOM from 'react-dom';

// OVERVIEW 1.2 Propiedades (props para les amigues)

class Board extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    <Square value = "uno"/>
                    <Square value = "dos"/>
                    <Square value = "tres"/>
                </div>
                <div className="row">
                    <Square value = "cuatro"/>
                    <Square value = "cinco"/>
                    <Square value = "seis"/>
                </div>
                <div className="row">
                    <Square value = "siete"/>
                    <Square value = "ocho"/>
                    <Square value = "nueve"/>
                </div>
            </div>
        );
    }
}
class Square extends React.Component{

    render(){
        return(
            <span>
                <button>{this.props.value}</button>
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