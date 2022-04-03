import React from 'react';
import styled from 'styled-components';
import listaProdutos from '../../Catalogo/produtos.json';
import Carrinho from '../Carrinho/Carrinho';

const ContainerHeader = styled.header`
position: absolute;
width:100%;
height: 80px;
display:flex;
justify-content: space-between;
align-items: center;
color: white;
background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);


h1{
  padding-bottom:5px;
  margin-left: 10px;
  font-family: 'Righteous', cursive;
}

`

const ButtonCarrinho = styled.button`
  border:none;
  background-color: transparent;
  margin-right: 40px;
  cursor: pointer;

  img {
    width: 40px;
  }

  i{
    font-size:30px;
    color: white;
    transition: 0.2s;

    :hover{
      font-size:32px;
    }

  }
`

const DivLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;

  i{
    font-size: 30px;
  }
  img {
    width: 45px;
    margin-right: 20px;
  }
`

class Header extends React.Component {

  state = {
    comprando: false,
  }

  showCarrinho = ()=>{
    this.state.comprando = !this.state.comprando
    this.setState({comprando: this.state.comprando})
    console.log(this.state.comprando)
  }

  render() {

    let componenteCarrinho
    if(this.state.comprando){
       componenteCarrinho = <Carrinho onClick={this.props.onClick} items = {this.props.filtroCarrinho} totalCarrinho = {this.props.totalCarrinho} />     
    }
    return (
      <ContainerHeader>
        <DivLogo>
        <img src="https://cdn-icons-png.flaticon.com/512/2126/2126708.png"></img>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
        </style>
        <h1>Space Shirt</h1>
        </DivLogo>
        <ButtonCarrinho onClick={this.showCarrinho}><img src="https://cdn-icons-png.flaticon.com/512/5008/5008679.png"></img></ButtonCarrinho>
        {componenteCarrinho}
      </ContainerHeader>
    );
  }

}

export default Header;
