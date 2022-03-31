import React, { Component } from "react";
import styled from "styled-components";

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 33vw;
  border: solid black 2px;
`;

class Filters extends Component {
  state = {};
  render() {
    return (
      <Inputs>
        <input
          value={this.props.inputValue}
          onChange={this.props.filtraNomeDaCamiseta}
        />
        <input
          value={this.props.maxValue}
          onChange={this.props.filtraPorValorMaximo}
          max="1000"
          type="number"
        />
        <input
          value={this.props.minValue}
          onChange={this.props.filtraPorValorMinimo}
          min="1"
          type="number"
        />
      </Inputs>
    );
  }
}

export default Filters;
