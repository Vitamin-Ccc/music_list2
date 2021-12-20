import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from{ transform: rotate(0deg) }
  to{ transform: rotate(360deg) }
`;

export const Star = styled.div`
  color: orange;
  font-size: 20px;
  margin: auto;
  text-align: center;
  text-shadow: 1px black;
  animation: ${rotate360} 2s linear infinite;
  padding: 50px;

  &:hover {
    color: yellow;
  }
`