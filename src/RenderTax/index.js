import React from "react";

import tax from "../tax/tax";
import talkMore from "../talkMore/talkMore";
import { Container, Card } from "./styles";

export default function RenderTax(props) {
  const { origin, destino, tempo } = props;
  const valueTax = tax(origin, destino);
  const valueWithoultPlam = origin ? (destino ? (tempo * valueTax).toFixed(2) : '0.00') : '0.00';
  const valuePlan30 = talkMore("talk-30", tempo, valueTax).toFixed(2);
  const valuePlan60 = talkMore("talk-60", tempo, valueTax).toFixed(2);
  const valuePlan120 = talkMore("talk-120", tempo, valueTax).toFixed(2);

  return (
    <Container>
      <Card>
        <h3>Valor sem plano</h3>
        <p>{`R$ ${valueWithoultPlam}`}</p>
      </Card>
      <Card color={'primary'}>
        <h3>Valor plano Fale Mais 30</h3>
        <p>{`R$ ${valuePlan30}`}</p>
      </Card>
      <Card color={'secundary'}>
        <h3>Valor plano Fale Mais 60</h3>
        <p>{`R$ ${valuePlan60}`}</p>
      </Card>
      <Card color={'dark'}>
        <h3>Valor plano Fale Mais 120</h3>
        <p>{`R$ ${valuePlan120}`}</p>
      </Card>
    </Container>
  );
}
