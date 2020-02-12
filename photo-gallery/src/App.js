import React, { Component } from 'react';
import images from './data.js';
import './App.css';
import Creature from './ImageItem.js';
import Header from './Header.js';
import ImageList from './ImageList.js';


class App extends Component {
    state = {
      selected: null
    };
    handleChange = e => {
      this.setState({selected: e.target.value});
    }
    render () {

      const { selected } = this.state;
      const creaturesNodes = images
      .filter(Creature => {
        if (!selected) return true;
        return Creature.keyword === selected;
      })
      .map(hornedCreature => 
        <Creature
        creature={hornedCreature} 
        />)
        
        
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
      <ImageList creaturesNodes={creaturesNodes}></ImageList>
      </div>
      );
    }      
}
export default App;

