import React, { Component } from 'react'
import ReactPlayer from 'react-player'
// import { Button, Icon } from 'semantic-ui-react'
import Duration from './Duration'
import Transitions from './VolumeTransition'
import GoBack from './GoBack'

export default class Vid extends Component {
  constructor(props){
    super(props);
    this.state = {
      playing: true,
      played: 0,
      volume: 0.8,
      duration: 0,
      control: true
    }
  }

  // Not working -> Find player iframe and onclick add controls
  // componentDidUpdate() {
  //   let vidOverlay = document.querySelector(".html5-video-container");
  //   if (vidOverlay) {
  //     vidOverlay.onclick = function() {
  //       console.log('found it')
  //       // videoOverlay.onclick = function() { this.setState({ control: !this.state.control }) }
  //     }
  //   }
  // }

  turnOnControls = () => {
    this.setState({ control: true })
  }
  onPlay = () => {
    // console.log('onPlay')
    this.setState({ playing: true })
  }
  onPause = () => {
    // console.log('onPause')
    this.setState({ playing: false })
  }
  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }
  // setVolume = e => {
  //   this.setState({ volume: parseFloat(e.target.value) })
  // }
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
    // e.target.style.transform = 'scale(.8)'
    // console.log(e.target.style);
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
  onDuration = (duration) => {
    // console.log('onDuration', duration)
    this.setState({ duration })
  }
  onProgress = state => {
    // console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  ref = player => {
    this.player = player
  }

  render () {
    const { playing, volume, played, duration } = this.state
    let controls = "";
    if (this.state.control) {
      controls = (
        <div>
          <GoBack />
          <span className="volume-controllers">
            <Transitions cname="volume-down" name="volume down" onClick={this.volumeDown}/>
            <Transitions cname="volume-up" name="volume up" onClick={this.volumeUp}/>
          </span>
          <span>
          <Duration className="time-passed" seconds={duration * played} />
          <input
            className="range-slider"
            type='range' min={0} max={1} step='any'
            value={played}
            onMouseDown={this.onSeekMouseDown}
            onChange={this.onSeekChange}
            onMouseUp={this.onSeekMouseUp}
          />
          <Duration className="time-remaining" seconds={duration * (1 - played)} />
          </span>
        </div>
      )
    }

    return (
      <div className='player-wrapper' onClick={this.turnOnControls}>
        <ReactPlayer
          ref={this.ref}
          className='react-player'
          playing={playing}
          volume={volume}
          url='https://www.youtube.com/watch?v=HI__cDQs5hY'
          width='100%'
          height='100vh'
          onPlay={this.onPlay}
          onPause={this.onPause}
          onSeek={e => console.log('onSeek', e)}
          onDuration={this.onDuration}
          onProgress={this.onProgress}
        />
        {/*<h1 onClick={this.playPause}>{this.state.playing ? 'Pause' : 'Play'}</h1>*/}
        {controls}
      </div>
    )
  }
}
