import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class Vid extends Component {
  constructor(props){
    super(props);
    this.state = {
      playing: true,
      played: 0,
      volume: 0.8
    }
  }

  onPlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }
  onPause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }
  playPause = () => {
    this.setState({ playing: !this.state.playing })
  }
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  ref = player => {
    this.player = player
  }

  render () {
    const { playing, volume, played } = this.state
    const SEPARATOR = ' · '
    console.log(this.state);
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          ref={this.ref}
          className='react-player'
          playing={playing}
          volume={volume}
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='100vh'
          onPlay={this.onPlay}
          onPause={this.onPause}
        />
        <h1 onClick={this.playPause}>{this.state.playing ? 'Pause' : 'Play'}</h1>
        <tr>
          <th>Volume</th>
          <td>
            <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
          </td>
        </tr>
        <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>
      </div>
    )
  }
}
