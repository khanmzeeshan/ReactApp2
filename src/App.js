import React, { Component } from 'react'
import Table from './Table';
import Form from './Form';

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
  )}

handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
}


  };


export default App;