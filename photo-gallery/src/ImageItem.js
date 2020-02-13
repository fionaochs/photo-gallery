import React, { Component } from 'react'

export default class Creature extends Component {
    render () {
        return <li>

            <div id="info-container">
                <h2>{this.props.creature.title}</h2>
                <p className="creature-type">{this.props.creature.description}</p>
            </div>

            <div className="image-container">
                <img 
                    alt={this.props.creature.url}
                    src={this.props.creature.url} />
            </div>

            <p className="horns">{this.props.creature.horns}</p>
        </li>
    }
}
//render 
//for every creature selected
//<li>
//   <div id=info> <h2/> <p/> </div>
//   <div class img> <img/> </div>
// </li>
//will be inserted into <ul>