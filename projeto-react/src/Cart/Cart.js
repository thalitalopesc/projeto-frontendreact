import React from "react";
import {CardCart} from "./Styled";

const Cart = ({cartList, deleteProductToCart}) => {
  return (
    <>
    {cartList.map((item) => {
      return (
        <CardCart>
          <h1>{item.nome}</h1>
          <p>R$ {item.valor}</p>
          <p>Quantidade: {item.amount}</p>
          <button onClick={() => {deleteProductToCart(item)}}>Remover</button>
        </CardCart>
      )
    })}
    </>
  )
  }
  
  export default Cart;