import React from "react";
import styled from "styled-components";

export default function BoxWithStyledComponents({ $color }) {
    return <StyledBox $color={$color} />;
  }

const StyledBox = styled.div`
width: 100px;
height:100px;
margin:2rem;
border: solid;
cursor: pointer;
background-color: ${(props) => 
props.$color === "black" ? "var(--color-black)" : "var(--color-green)"
};

&:hover {
    background-color: red;
}
`;
