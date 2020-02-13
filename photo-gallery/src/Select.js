import React, { Component } from 'react'

export default class Select extends Component {
    render (){
    
        return <div>
        <select className="horned-types" onChange={this.props.handleChangeCallback}>
                <option value="" defaultValue>
                    All Horned Types
                </option>
                <option value="narwhal">Narwhal</option>
                <option value="rhino">Rhino</option>
                <option value="unicorn">Unicorn</option>
                <option value="unilego">Unilego</option>
                <option value="triceratops">Triceratops</option>
                <option value="markhor">Markhor</option>
                <option value="mouflon">Mouflon</option>
                <option value="addax">Addax</option>
                <option value="chameleon">Chameleon</option>
                <option value="lizard">Lizard</option>
                <option value="dragon">Dragon</option>
            </select>
            <select className="horned-types" onChange={this.props.handleHornsCallback}>
                <option value="" defaultValue>
                    Number of Horns
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>

            </select>
            </div>
    }
}