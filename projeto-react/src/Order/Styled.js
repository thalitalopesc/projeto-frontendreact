import styled from "styled-components";

export const Container = styled.div`
 display: grid;
 grid-template-rows: 100px 1fr;
 grid-gap: 5px;
`;

export const Selection = styled.div`
display: grid;
justify-items: end;
grid-template-columns: 12fr 75px 1fr;
margin-top: 50px;
margin-right: 70px;
font-family: Arial, Helvetica, sans-serif;
color: black;
font-size: 14px;
height: 10px;
`;