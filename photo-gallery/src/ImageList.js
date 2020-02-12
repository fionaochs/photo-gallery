import React, { Component } from 'react'

export default class CreatureList extends Component {
    render () {
        return <section className="options">
            
        <section className="list-section">
            <ul className="creatures">{this.props.creaturesNodes}</ul>
        </section>

        </section>
    }
}
