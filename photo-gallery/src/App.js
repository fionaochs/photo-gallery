import React, { Component } from 'react';
import images from './data.js';
import './App.css';
import Creature from './ImageItem.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
// import request from 'superagent';


export default class App extends Component {
    state = {
      selected: null,
      horns: null,
      keyword: null
    };
    handleChange = e => {
      this.setState({selected: e.target.value});
    }
    handleHorns = e => {
      this.setState({horns: Number(e.target.value)});
    }
    handleKeyword = e => {
      this.setState({keyword: e.target.value});
    }
    

    render () {

      const { selected } = this.state;

      const creaturesNodes = images
      .filter(Creature => {
        if (!selected) return true;
        return Creature.keyword === selected;
      })
      .filter(Creature => {
        if (!this.state.horns) return true;
        return Creature.horns === this.state.horns;
      })
      .filter(Creature => {
        if (!this.state.keyword) return true;
        return Creature.keyword.includes(this.state.keyword);
      })
      .map(hornedCreature => 
        <Creature
        creature={hornedCreature} 
        />)
        //create <li> for each selected creature and feed that into ImageList
        //through creaturesNodes
        
        
        return (
          <div className="App">
      <Header></Header>
      <select className="horned-types" onChange={this.handleChange}>
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
            <select className="horned-types" onChange={this.handleHorns}>
                <option value="" defaultValue>
                    Number of Horns
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>

            </select>
            <input type="text" className="form" onChange={this.handleKeyword}></input>
          <ImageList creaturesNodes={creaturesNodes}></ImageList>
          </div>
      );
    }      
}