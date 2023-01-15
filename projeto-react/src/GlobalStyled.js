import { createGlobalStyle } from "styled-components"
import styled from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

export const Home = styled.div`
    display: Flex;
    justify-content: center;
`

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  row-gap: 35px;
  justify-items: center;
  padding: 50px;
`