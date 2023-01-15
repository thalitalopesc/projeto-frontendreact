import React from "react";
import {Card, Title, ButtonPay, Image} from "./Styled";

const ProductCard = ({trip, addCart}) => {
  return (
  <Card>
    <Image src={trip.imagem} alt={trip.alt}/>
    <Title>{trip.nome}</Title>
    <p>R$ {trip.valor}</p>
    <ButtonPay onClick={()=>{addCart(trip)}}>Eu quero!</ButtonPay>
  </Card>
  )
}

export default ProductCard;