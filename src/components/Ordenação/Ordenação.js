import React from 'react';
import styled from 'styled-components';

const SelectOrdem = styled.select`
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

class Ordenação extends React.Component {

    render() {
        return (
            <div>
            <label>Ordenação por preço: </label>
            
            <selectOrdem
              value={this.state.sortingOrder}
              onChange={this.updateSortingOrder}
            >
              <option value="crescente">Crescente</option>
              <option value="descrescente">Descrescente</option>

            </selectOrdem>
          </div>
        );
    }
}

export default Ordenação;