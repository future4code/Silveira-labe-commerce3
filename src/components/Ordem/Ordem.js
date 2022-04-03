import React from 'react';
import styled from 'styled-components';

const SelectOrdem = styled.select`
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

class Ordem extends React.Component {
    
      render(){
        return (
          <div>
            <label>Preço:</label>
            <SelectOrdem
                value={this.props.ordem} 
                onChange={this.props.mudarOrdem}>
              <option value="Crescente">Menores Preços</option>
              <option value="Decrescente">Maiores Preços</option>
              
            </SelectOrdem>
          </div>
        );
      }
      
    }
    
    export default Ordem;

  
  // .sort((produtoA, produtoB) => this.state.ordem === 'Crescente' ? produtoA.preco - produtoB.preco : produtoB.preco - produtoA.preco)
     


  