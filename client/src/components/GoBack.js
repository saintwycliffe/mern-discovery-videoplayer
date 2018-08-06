import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'

export default class GoBack extends Component {
  constructor(props){
    super(props);
    this.state = {
      shadowed: false
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  clicked = (e) => {
    this.toggleVisibility();
  }
  toggleVisibility = () => {
    this.setState({
      shadowed: !this.state.shadowed
    })
    setTimeout(() => {this.setState({ shadowed: !this.state.shadowed })}, 200);
    setTimeout(() => {this.props.onClick()}, 250);   
  }
  shadowed = () => {
    if(this.state.shadowed){
      return {
        boxShadow: '0px 0px 50px #82CFD0',
        padding: 'none',
        // transition: 'all .1s ease-in-out 0s',
        fontSize: '160%',
      }
    }
  }
  shadowed2 = () => {
    if(this.state.shadowed){
      return { transform: 'scale(.9)', }
    }
  }

  render() {
    let shadowy = this.shadowed();
    let shadowy2 = this.shadowed2();

    return (
        <Button icon style={shadowy} onClick={this.clicked} size="massive" className='exit-button'>
          <Icon style={shadowy2} name='undo' />
            &nbsp; GO BACK
        </Button>
    )
  }
}
