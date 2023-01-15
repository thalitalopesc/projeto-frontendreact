import React from "react";
import {Selection, Container} from "./Styled"

const Order = ({setSortingParameter, sortingParameter, order, setOrder, product}) => {
  return (
    <Container>
      <Selection>
        <label for="sortingParameter">Ordenar por:</label>
        <select value={sortingParameter} onChange={ev => {setSortingParameter(ev.target.value)}}>
            <option value="title">Título</option>
            <option value="price">Preço</option>
        </select>

        <select value={order} onChange={ev => {setOrder(ev.target.value)}}>
            <option value="asc">Crescente</option>
            <option value="desc">Descendente</option>
          </select>
      </Selection>
    </Container>
  )
}

export default Order;