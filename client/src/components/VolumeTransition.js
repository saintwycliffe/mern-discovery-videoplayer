import React, { Component } from 'react';
import { Transition, Icon } from 'semantic-ui-react';

export default class Transitions extends Component {
  constructor(props){
    super(props);
    this.state = {
      animation: 'pulse',
      duration: 200,
      visible: true,
      shadowed: false
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  clicked = (e) => {
    this.props.onClick();
    this.toggleVisibility();
  }
  toggleVisibility = () => {
    this.setState({
      visible: !this.state.visible,
      shadowed: !this.state.shadowed
    })
    setTimeout(() => {this.setState({ shadowed: !this.state.shadowed })}, 200);
  }
  shadowed = () => {
    if(this.state.shadowed){
      return {textShadow: '0px 0px 50px #82CFD0',}
    }
  }

  render() {
    const { visible } = this.state;
    let shadowy = this.shadowed();

    return (
      <Transition visible={visible} animation='pulse' duration={200}>
        <Icon
          className={this.props.cname}
          name={this.props.name}
          style={shadowy}
          size="massive"
          onClick={this.clicked}
        />
      </Transition>
    )
  }
}
