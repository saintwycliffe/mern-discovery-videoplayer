import React, { Component } from 'react';
import './App.css';
import Dimmerr from './components/Dimmer';
import Vid from './components/Video';

// console.log(quiz[0].questions[0]);
// const q1 = quiz[0].questions[0].question;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Vid /> 
        <div className="tests">
          <p>In Testing Mode</p>
        </div>
        <div className="qna-container">
          <Dimmerr />
        </div>
      </div>
    );
  }
}

export default App;
