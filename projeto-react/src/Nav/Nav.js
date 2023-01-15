import React from "react";
import logoFoguete from "../Img/logoFoguete.png"
import { Nav, Image, Buttons, ButtonCart, ButtonLogin } from "./Styled"

const Navbar = ({goToCart}) => {
    return (
    <Nav>
      <div>
        <Image src={logoFoguete}/>
        <p>Viagens Espaciais</p>
      </div>
      <Buttons>
        <ButtonLogin onClick={goToCart}>Login</ButtonLogin>
        <ButtonCart onClick={goToCart}>Carrinho</ButtonCart>
      </Buttons>
    </Nav>
    )
  }
  
  export default Navbar;