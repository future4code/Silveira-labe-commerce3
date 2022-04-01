import React from "react";
import img1 from "./components/img/camisa1.jpg";
import img2 from "./components/img/camisa2.jpg";
import img3 from "./components/img/camisa3.jpg";
import img4 from "./components/img/camisa4.jpg";
import styled from "styled-components";
import Card from "./components/card";
import Filters from "./components/filtros";

const Body = styled.div`
  display: flex;
  gap: 2px;
`;

const CartDiv = styled.div`
  width: 33vw;
  border: solid black 2px;
`;

const Products = styled.div`
  width: 34vw;
  border: solid black 2px;
`;

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
    sortingOrder: "crescente",
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

  updateSortingOrder = (event) => {
    this.setState({
      sortingOrder: event.target.value,
    });
  };

  render() {
    
    //Aqui a gente pega os produtos do State e filtra de acordo com os filtros definidos (inputValue, maxValue, minValue)
    const filteredProducts = this.state.products.filter((product) => {
      return (
        product.name.includes(this.state.inputValue) &&
        product.value >= this.state.minValue &&
        product.value <= this.state.maxValue
      );
    });
    
    // Aqui a gente pega os produtos filtrados e organiza em ordem crescente e decrescente de acordo o sortingOrder
    filteredProducts.sort((currentValue, nextValue) => {
      if (this.state.sortingOrder === "crescente") {
        if (currentValue.value > nextValue.value) {
          return 1;
        }
        if (currentValue.value < nextValue.value) {
          return -1;
        }
      }

      if (this.state.sortingOrder === "descrescente") {
        if (currentValue.value > nextValue.value) {
          return -1;
        }
        if (currentValue.value < nextValue.value) {
          return 1;
        }
      }
      return 0;
    });

    //Aqui a gente pega a lista filtrada/ordenada e cria uma variável igual a ela para mapear produto por produto e renderizar no JSX
    let listProducts = filteredProducts.map((product) => {
      return <Card cardProduct={product} />;
    });

    //Aqui a gente pega a lista de produtos filtrada e extrai o tamanho dela para renderizar o totalProducts na tela de acordo com o que foi filtrado.
    let totalProducts = filteredProducts.length;

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
          <div>
            <label for="sort">Ordenação por preço: </label>
            <select
              name="sort"
              value={this.state.sortingOrder}
              onChange={this.updateSortingOrder}
            >
              <option value="crescente">Crescente</option>

              <option value="descrescente">Descrescente</option>
            </select>
          </div>
          <div>
            <p>Quantidade de produtos: {totalProducts}</p>
          </div>
          {listProducts}
        </Products>

        <CartDiv>carrinho</CartDiv>
      </Body>
    );
  }
}

export default App;
