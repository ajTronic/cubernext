import React from 'react'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            src: `./cubes/${Math.ceil(Math.random() * this.props.range)}.png`
        }

        console.log(this.state.src);
    }
    

    render() { 
        return (
            <p>
                <img src={this.state.src} alt="Rubik's cube"></img>
            </p>
        );
    }
}
 
export default Game;