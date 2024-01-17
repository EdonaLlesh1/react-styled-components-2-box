import React from "react";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";


export default function HomePage() {
  return (
    <div>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents $color="green"/>
      <BoxWithStyledComponents $color="black"/>
    </div>
  );
}
