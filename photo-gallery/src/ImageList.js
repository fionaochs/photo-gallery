import React, { Component } from 'react'

export default class CreatureList extends Component {
    render () {
        return <section className="options">

        <section className="list-section">
            <ul className="creatures">{this.props.creaturesNodes}</ul>
        </section>
            {/* creaturesNodes is the selected creature <li>
            inserts each creature <li> into <ul> holding all of them */}

        </section>
    }
}
