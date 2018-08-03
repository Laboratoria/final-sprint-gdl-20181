import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

// OVERVIEW 1.3 Componentes interactivos (react y eventos)

class Board extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            squares: Array(9).fill(null)
        }
        this.renderSquare = this.renderSquare.bind(this)
        this.play = this.play.bind(this)
    }
    play(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }
    renderSquare(i) {
        return <Square value={this.state.squares[i]}
            onClick = {()=>this.play(i)}
         />;
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
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        );
    }
}
class Square extends React.Component{
    render() {
        return (
          <button
            className="square"
            onClick={() => this.props.onClick()}
          >
            {this.props.value}
          </button>
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