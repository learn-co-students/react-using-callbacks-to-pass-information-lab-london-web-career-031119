import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  state = {
    selectedColor: ""
  };

  genRow = vals =>
    vals.map((val, idx) => (
      <Cell passingState={this.passingState} key={idx} color={val} />
    ));

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  color = input => {
    this.setState({
      selectedColor: input
    });
  };

  passingState = () => {
    return this.state.selectedColor;
  };

  render() {
    return (
      <div id="app">
        <ColorSelector color={this.color} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
