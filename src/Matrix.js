import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  state = {
    color: '#FFF'
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} passColor={this.passColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  handleColorChange = color => this.setState( { color: color } );

  passColor = () => this.state.color;

  render() {
    return (
      <div id="app">
        <ColorSelector handleColorChange={this.handleColorChange} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
