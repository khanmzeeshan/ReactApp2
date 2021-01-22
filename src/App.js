import React, { Component } from 'react'
import Table from './Table';
import Form from './Form';
import axios from 'axios';
//import FetchDemo from './FetchDemo'


class App extends Component {
    //constructor(props) {
    //super(props);
    state = {
    characters: []
    };
componentDidMount() {
  axios.get('http://localhost:5000/users') //axios get request 
    //res is API response object
     .then(res => {
      const characters = res.data.users_list;
      this.setState({ characters }); //updating state triggers render
 })     .catch(function (error) {
      //Not handling the error. Just logging into the console.
       console.log(error);
     });
  }
 

  //URL route: users/myID123
  removeCharacter = index => { 
    const { characters } = this.state;
    //need to delete with axios THEN NEEDS ;
    //response code 200 or 204?
    axios.delete('http://localhost:5000/users/')
    .then(result => {
      if (result.status){
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index}),
        })
      }
    });
    
  }
  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  //Only update table if POST call is successful
  //makePostCall(character){
  //  return axios.post('http://localhost:5000/users', character)
  //   .then(function (response) {
  //     console.log(response);
  //     return (response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     return false;
  //   });
  //}
  render() {
  
    return (
      <div className="container">
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />;
        
      </div>
      // <FetchDemo subreddit= 'calpoly'></FetchDemo>
    );}

//handleSubmit = character => {
  //const char_copy = this.state.character.slice();
  //char_copy.push(character);

  //this.setState({ characters: [...this.state.characters, character] }) //State update- renders table, new array is copy of array with new character
//}


  }


export default App;