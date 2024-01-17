import React from "react";
import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";

const HorizontalContainer = styled.div`
display: flex;
`;

export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <HorizontalContainer>
      <BoxWithStyledComponents $isBlack={false}/>
      <BoxWithStyledComponents $isBlack={true}/>
      </HorizontalContainer>
    </div>
  );
}
