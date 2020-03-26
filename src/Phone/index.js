import React from "react";
import {
  Container,
  Screen,
  TopBar,
  Overflow,
  ShadowTR,
  ShadowTL,
  ShadowBR,
  ShadowBL,
  InnerShadow
} from "./style";

export default function Phone(props) {
  return (
    <Container>
      <TopBar />
      <Overflow>
        <ShadowTR />
        <ShadowTL />
        <ShadowBR />
        <ShadowBL />
      </Overflow>
      <InnerShadow />
      <Screen>
        {props.children}
      </Screen>
    </Container>
  );
}
