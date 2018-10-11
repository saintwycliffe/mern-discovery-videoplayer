import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Idle from 'react-idle'
import Duration from './Duration'
import Transitions from './VolumeTransition'
import GoBack from './GoBack'
import videoUrl from {process.env.REACT_APP_VIDEO}


export default class Vid extends Component {
  constructor(props){
    super(props);
    this.state = {
      playing: true,
      played: 0,
      volume: 0.8,
      duration: 0,
      control: false
    }
  }

componentDidUpdate() {
  let vidOverlay = document.querySelector('video');
  vidOverlay.style.width = '';
  if (vidOverlay) { vidOverlay.onclick = () => this.toggleControls() }
  this.rangeUpdate();
}
triggerUnMount = () => {
  this.setState({ playing: !this.state.playing })
  this.props.onClick()
}
fadeControlsOut = () => {
  let fadeControlOut = document.querySelector('.the-controls');
  fadeControlOut.style.animation = 'fademeout 1.1s 1';
}
toggleControls = () => {
  if(this.state.control){
    this.fadeControlsOut();
    setTimeout(() => {this.setState({ control: false })}, 1000)
  } else {
    this.setState({ control: true })
  }
}
onPlay = () => { this.setState({ playing: true }) }
onPause = () => { this.setState({ playing: false }) }
playPause = () => { this.setState({ playing: !this.state.playing }) }
volumeDown = () => {
  if (this.state.volume > 0.3){
    let newVol = this.state.volume - 0.2;
    this.setState({ volume: newVol })
  }
}
volumeUp = () => {
  if (this.state.volume < 1){
    let newVol = this.state.volume + 0.2;
    this.setState({ volume: newVol })
  }
}
onSeekMouseDown = e => {
  this.setState({ seeking: true })
  e.target.style.boxShadow = '0px 0px 50px #82CFD0'
}
onSeekChange = e => {
  this.setState({ played: parseFloat(e.target.value) })
}
onSeekMouseUp = e => {
  this.setState({ seeking: false })
  this.player.seekTo(parseFloat(e.target.value))
  e.target.style.boxShadow = ''
}
rangeUpdate = () => {
  if (document.getElementById("myinput")) {
    let playState = this.state.played;
    document.getElementById("myinput").style.background =
      'linear-gradient(to right, #82CFD0 0%, #82CFD0 '
      +playState*100
      +'%, white '
      + playState*100
      + '%, white 100%)'
  }
}
onDuration = (duration) => { this.setState({ duration }) }
onProgress = state => {
  if (!this.state.seeking) {
    this.setState(state)
  }
}
ref = player => { this.player = player }

render () {
    const { playing, volume, played, duration } = this.state
    let videoFrame = document.getElementsByTagName('video')[0];
    let controls = "";
    if (this.state.control) {
      controls = (
        <div className="the-controls">
          <GoBack onClick={this.triggerUnMount} />
          <span className="volume-controllers">
            <Transitions cname="volume-down" name="volume down" onClick={this.volumeDown}/>
            <Transitions cname="volume-up" name="volume up" onClick={this.volumeUp}/>
          </span>
          <span className="time-controls">
          <Duration className="time-passed" seconds={duration * played} />
          <input
            className="range-slider"
            id="myinput"
            type='range' min={0} max={1} step='any'
            value={played}
            onMouseDown={this.onSeekMouseDown}
            onChange={this.onSeekChange}
            onMouseUp={this.onSeekMouseUp}
          />
          <Duration className="time-remaining" seconds={duration * (1 - played)} />
          </span>
          <Idle
            timeout={3000} render= {
              ({ idle }) => <div> { idle ? this.toggleControls() : null } </div>
            }
          />
        </div>
      )
    }
    if(videoFrame){
      videoFrame.style.minWidth = "100vw";
      videoFrame.style.minHeight = "100vh";
      videoFrame.style.objectFit = "cover";
    }

    return (
      <div className='player-wrapper' style={ this.state.playing ? fadedin : fadedout } >
        <ReactPlayer
          ref={this.ref}
          className='react-player'
          playing={playing}
          volume={volume}
          url={videoUrl}
          width=''
          height=''
          onPlay={this.onPlay}
          onPause={this.onPause}
          onDuration={this.onDuration}
          onProgress={this.onProgress}
        />
        {/*<h1 onClick={this.playPause}>{this.state.playing ? 'Pause' : 'Play'}</h1>*/}
        {controls}
        { this.state.played === 1 &&
          <Idle
            timeout={1}
            render={({ idle }) =>
              <div>{ idle ? this.props.onClick() : null }</div>
            }
          />
        }
      </div>
    )
  }
}

const fadedin = {
  animation: 'fademein 1s 1'
}

const fadedout = {
  animation: 'fademeout 1s 1'
}
