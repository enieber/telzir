import React from "react";
import Select from 'react-select'

import { Container, Label, Input } from "./styles";

export default function InputStyled(props) {
  if (props.type === 'select') {
    return (
      <Container>
        <Label>{props.title}</Label>
        <Select
          options={props.options}
          onChange={props.onChange}
        />
      </Container>
    );
  }
  return (
    <Container>
      <Label>{props.title}</Label>
      <Input
        type="number"
        value={props.value}
        onChange={props.onChange}
      />
    </Container>
  );
}
