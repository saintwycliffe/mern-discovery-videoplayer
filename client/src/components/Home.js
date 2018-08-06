import React, { Component } from 'react'
import { Transition, Icon, Button } from 'semantic-ui-react'

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      animation: 'pulse',
      duration: 200,
      visible: true
    };
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  clicked = (e) => {
    this.props.onClick();
    this.toggleVisibility();
  }
  toggleVisibility = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render(){
    const { visible } = this.state;
    return(
      <div className="tests">
        <div className="center">
          <h1>Title of Video</h1>
          <Transition visible={visible} animation='pulse' duration={200}>
            <Icon
              className="play circle icon"
              size="massive"
              onClick={this.clicked}
            />
          </Transition>
          <h2>Choose another language:</h2>
          <div className="language-buttons" style={languageButtons} >
            <Button
              className="language-button"
              url=""
              size="massive"
              content="Espanol"
            />
          </div>
        </div>
      </div>
    )
  }
}

const languageButtons = {
  marginTop: '30%',
}
