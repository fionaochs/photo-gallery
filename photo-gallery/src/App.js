import React, { Component } from 'react';
import images from './data.js';
import './App.css';
import Creature from './ImageItem.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import Select from './Select.js';
// import request from 'superagent';


export default class App extends Component {
    state = {
      selected: null,
      horns: null,
      keyword: null
    };
    
    render () {
      const handleHorns = e => {
        this.setState({horns: Number(e.target.value)});
      }
      const handleKeyword = e => {
        this.setState({keyword: e.target.value});
      }
      const handleChange = e => {
        this.setState({selected: e.target.value});
      }

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
          <Select handleChangeCallback={handleChange} handleHornsCallback={handleHorns}/>
          <input type="text" className="form" onChange={handleKeyword}></input>
          <ImageList creaturesNodes={creaturesNodes}></ImageList>
          </div>
      );
    }      
}