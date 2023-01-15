import React from "react";
import { Container, InputValor, Input, Search } from "./Styled";
import { BiSearchAlt } from "react-icons/bi";

const Filters = ({name, setName, minPrice, setMinPrice, setMaxPrice, maxPrice}) => {

  const receiveName = (event) => {
    setName(event.target.value)
  }

  const receiveMinPrice = (event) => {
    setMinPrice(event.target.value)
  }

  const receiveMaxPrice = (event) => {
    setMaxPrice(event.target.value)
  }

  return (
    <Container>

      <Input 
      placeholder="  Busque sua viagem aqui" 
      onChange={receiveName} 
      value={name}/>

      <label>Valor Mín.
      <InputValor 
      type="number"  
      onChange={receiveMinPrice} 
      value={minPrice}/>
      </label>

      <label>Valor Máx.
      <InputValor 
      type="number"  
      onChange={receiveMaxPrice} 
      value={maxPrice}/>
      </label>

      <Search><BiSearchAlt/></Search>
    </Container>
  )
}

export default Filters;