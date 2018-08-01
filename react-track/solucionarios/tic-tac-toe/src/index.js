import React from 'react';
import ReactDOM from 'react-dom';

// OVERVIEW 1.3 Componentes interactivos (react y eventos)

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
    constructor(props){
        super(props);
        this.play = this.play.bind(this)
    }
    play(){
        console.log("holiiiii")
    }
    render(){
        return(
            <span>
                <button onClick={this.play}>{this.props.value}</button>
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