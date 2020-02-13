import React, { Component } from 'react'
import Creature from './ImageItem.js';
import images from './data.js';

export default class Filter extends Component {
    state = {
      hasHorns: null,
      keyword: null
    };
    handleChange = e => {
      this.setState({selected: e.target.value});
    }
    render () {
      
      const hasHorns = !filter.horns || creature.horns >= filter.horns;
      const hasKeyword = !filter.keyword || creature.keyword === filter.keyword;

      const { hasHornsState } = this.state.hasHorns;
      const { keywordState } = this.state.keyword;

      const creaturesNodes = images
      .filter(Creature => {
        if (!hasHornsState) return true;
        return Creature.horns === hasHornsState;
      })
      .map(hornedCreature => 
        <Creature
        creature={hornedCreature} 
        />)
        const creaturesNodes = images
      .filter(Creature => {
        if (!keywordState) return true;
        return Creature.keyword === keywordState;
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
      <select className="horned-types" onChange={this.handleHorns}>
                <option value="" defaultValue>
                    Number Horns
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>

            </select>
      <ImageList creaturesNodes={creaturesNodes}></ImageList>
      </div>
      );
    }      
}

