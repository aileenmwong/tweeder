import React, { Component } from 'react';
import TweedForm from './components/TweedForm';
import TweedList from './components/TweedList';
import './App.css';

//git pull test

import axios from 'axios';


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
    axios('localhost:3001/api/tweedr')
    .then(res => {
      this.setState(prevState => {
        return {
          db: this.data.tweed,
        }
      })
    })
  }

  handleChange(event) {
    this.setState({
      inputTweedValue: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.content = '';
    axios('localhost:3001/api/tweedr')
    .then(res => {
      this.setState(prevState => {
        return {
          db: this.data.tweed,
        }
      })
    })
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
        <TweedList
          tweed={this.state.db} />
      </div>

    );
  }
}

export default App;
