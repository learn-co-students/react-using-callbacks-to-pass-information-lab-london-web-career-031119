import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)

    this.state = {
      colour: this.props.color
    }
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
