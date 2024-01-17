import React from "react";
import styled from "styled-components";

export default function BoxWithStyledComponents({ $color }) {
    return <StyledBox $isBlack={$color} />;
  }

  const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`;
