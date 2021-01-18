import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
  }
  initialState = {
    name: '',
    job: ''
  };

  state = this.initialState;

handleChange = event => {
    const { name, value, id } = event.target
  
    this.setState({
      [name]: value,
    })
  }
submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
render() {
    const { name, job, id } = this.state;
  
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} /> 
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
      //<h1>r/somesubReddit</h1>
      //<u1></u1>
    );
  }
  
}

  export default Form;  