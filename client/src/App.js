import React, { Component } from 'react';
import Idle from 'react-idle';
import './App.css';
import Dimmerr from './components/Dimmer';
import Vid from './components/Video';
import Home from './components/Home';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      mountVid: false,
      dimReset: false
    }
  }

  toggleMountVid = () => {
    setTimeout(() => {this.setState({
      mountVid: !this.state.mountVid,
      dimReset: !this.state.dimReset
    })}, 250)
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
        {/*
          - Dimmer overlay -
          
        { this.state.dimReset === false &&
          <Idle
            timeout={30000}
            render={({ idle }) =>
              <div>
                {idle
                  ? <Dimmerr />
                  : null
                }
              </div>
            }
          />
        }

        */}
      </div>
    );
  }
}

export default App;
