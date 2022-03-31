import React, { Component } from "react";
import styled from "styled-components";

const Images = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 200px;
`;

class Card extends Component {
  state = {};
  render() {
    return (
      <Images>
        <div>
          <p>{this.props.cardProduct.name}</p>
          <p>R${this.props.cardProduct.value}</p>
        </div>
        <Img src={this.props.cardProduct.imageUrl} alt="camiseta 1" />
      </Images>
    );
  }
}

export default Card;
