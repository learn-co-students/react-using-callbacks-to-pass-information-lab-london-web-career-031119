import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  state = {
    selectedColor: null
  };

  constructor() {
    super();
  }

  newColor = () => this.state.selectedColor;
  genRow = vals =>
    vals.map((val, idx) => (
      <Cell key={idx} color={val} newColor={this.newColor} />
    ));

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  setColor = colorString => this.setState({ selectedColor: colorString });
  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
