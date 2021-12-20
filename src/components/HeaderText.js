import styled, { keyframes } from "styled-components";

export const HeaderText = styled.h1`
  font-family: 'Corinthia', cursive;
  font-size: 150px;
  text-align: center;
  background: -webkit-radial-gradient(circle farthest-corner at center center, #CF2411 0%, #0CCF26 42%);
  background: -moz-radial-gradient(circle farthest-corner at center center, #CF2411 0%, #0CCF26 42%);
  background: radial-gradient(circle farthest-corner at center center, #CF2411 0%, #0CCF26 42%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: rotate(-3deg);
`;

export const FormHeader = styled.h1`
  font-size: 30px;
  background: #8ECF3A;
  background: -webkit-linear-gradient(to top right, #8ECF3A 0%, #CF1512 100%);
  background: -moz-linear-gradient(to top right, #8ECF3A 0%, #CF1512 100%);
  background: linear-gradient(to top right, #8ECF3A 0%, #CF1512 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const colorChange = keyframes `
  0% {color: green}
  30% {color: yellow}
  70% {color: red}
  100% {color: green}
`

export const ListHeader = styled.h1`
  font-size: 30px;
  text-align: center;
  animation: ${colorChange} 5s linear infinite;
`;
