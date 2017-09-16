import React, { Component } from 'react';
import TweedForm from './components/TweedForm';
import TweedList from './components/TweedList';
import './App.css';
//git pull test

class App extends Component {
  constructor() {
    super();
    this.state = {
      db: {},
      inputTweedValue: '',
      };

  }

  componentWillMount() {
    console.log('App will mount');
  }

  componentDidMount() {
    console.log('App did mount');
  }

  handleChange(event) {
    this.setState({
      inputTweedValue: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.content = '';
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Tweedr</h1>
          <h2>What ya thinking?</h2>
        </div>
        <TweedForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          />
        <TweedList/>
      </div>
    );
  }
}

export default App;
