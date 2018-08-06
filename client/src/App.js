import React, { Component } from 'react';
import './App.css';
import Dimmerr from './components/Dimmer';
import Vid from './components/Video';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mountVid: true
    }
  }

  toggleMountVid = () => {
    this.setState({ mountVid: !this.state.mountVid })
  }

  render() {
    let videoPlay = "";
    if(this.state.mountVid) { videoPlay = (
      <Vid onClick={this.toggleMountVid} />
    )}
    console.log(this.state);
    return (
      <div className="App">
        {videoPlay}
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
