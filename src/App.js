import React, { Component } from 'react'
import Table from './Table';
import Form from './Form';
//import FetchDemo from './FetchDemo'

class App extends Component {
  constructor (props){
  super(props);
  }
  state = {
		characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      }
    ]
  }
render() {
  return (
    <div className="container">
      <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
      <Form handleSubmit={this.handleSubmit} />;
      
    </div>
    // <FetchDemo subreddit= 'calpoly'></FetchDemo>
  )}
  removeCharacter = index => {
    const { characters } = this.state;
    
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    })
  }
handleSubmit = character => {
  //const char_copy = this.state.character.slice();
  //char_copy.push(character);

  this.setState({ characters: [...this.state.characters, character] }) //State update- renders table, new array is copy of array with new character
}


  };


export default App;