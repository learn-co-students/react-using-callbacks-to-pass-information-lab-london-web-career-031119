import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }

  changeColor = () => {
    this.setState({ color: this.props.getColor() });
  };

  render() {
    return (
      <div
        className="cell"
        onClick={this.changeColor}
        style={{ backgroundColor: this.state.color }}
      />
    );
  }
}
