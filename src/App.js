import React from "react";
import img1 from "./components/img/camisa1.jpg";
import img2 from "./components/img/camisa2.jpg";
import img3 from "./components/img/camisa3.jpg";
import img4 from "./components/img/camisa4.jpg";
import styled from "styled-components";
import Card from "./components/card";
import Filters from "./components/filtros"

const Body = styled.div`
  display: flex;
  gap: 2px;
` 

const CartDiv = styled.div `
  width: 33vw;
  border: solid black 2px;
`

const Products = styled.div `
  width: 34vw;
  border: solid black 2px;

` 

class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: "Camiseta 1",
        value: 30,
        imageUrl: img1,
      },

      {
        id: 2,
        name: "Camiseta 2",
        value: 50,
        imageUrl: img2,
      },

      {
        id: 3,
        name: "Camiseta 3",
        value: 100,
        imageUrl: img3,
      },

      {
        id: 4,
        name: "Camiseta 4",
        value: 200,
        imageUrl: img4,
      },
    ],
    inputValue: "",
    maxValue: 10000,
    minValue: 1,
  };

  filtraNomeDaCamiseta = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  filtraPorValorMaximo = (event) => {
    this.setState({
      maxValue: Number(event.target.value),
    });
  };

  filtraPorValorMinimo = (event) => {
    this.setState({
      minValue: Number(event.target.value),
    });
  };

  render() {
    const filteredProducts = this.state.products.filter ((product) => {
      return (
      product.name.includes(this.state.inputValue) &&
      product.value >= this.state.minValue &&
      product.value <= this.state.maxValue

      ) 
    }) 

    let listProducts = filteredProducts.map((product) => {
      return (
       <Card
          cardProduct = {product}
       />
      );
    });

    return (
      <Body>
        <Filters
          inputValue={this.state.inputValue}
          filtraNomeDaCamiseta={this.filtraNomeDaCamiseta}
          maxValue={this.state.maxValue}
          filtraPorValorMaximo={this.filtraPorValorMaximo}
          minValue={this.state.minValue}
          filtraPorValorMinimo={this.filtraPorValorMinimo}
        />
        

        <Products>
          {listProducts}
        </Products>

        <CartDiv>
          carrinho
        </CartDiv>

      </Body>
    );
  }
}

export default App;
