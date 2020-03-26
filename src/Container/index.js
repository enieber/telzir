import React from "react";

import { Container } from "./styles";

export default function ContainerStyled(props) {
  return <Container>{props.children}</Container>;
}
