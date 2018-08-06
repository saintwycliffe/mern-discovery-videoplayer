import React, { Component } from 'react';
import './App.css';
import Dimmerr from './components/Dimmer';
import Vid from './components/Video';
import Home from './components/Home';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mountVid: false
    }
  }

  toggleMountVid = () => {
    setTimeout(() => {this.setState({ mountVid: !this.state.mountVid })}, 250)
  }

  render() {
    let videoPlay = "";
    if(this.state.mountVid) { videoPlay = (
      <Vid onClick={this.toggleMountVid} />
    )}
    return (
      <div className="App">
        <Home onClick={this.toggleMountVid} />
        {videoPlay}
        <Dimmerr />
      </div>
    );
  }
}

export default App;
