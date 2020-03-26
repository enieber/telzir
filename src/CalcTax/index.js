import React, { useState } from "react";

import Phone from "../Phone";
import Input from "../Input";
import { Container, ContainerInner } from "./styles";
import RenderTax from "../RenderTax";

export default function CalcTax() {
  const [origin, setOrigin] = useState("");
  const [destino, setDestino] = useState("");
  const [tempo, setTempo] = useState(0);
  const [destinationOptions, setDestinationOptions] = useState([
    { value: "011", label: "011" },
    { value: "016", label: "016" },
    { value: "017", label: "017" },
    { value: "018", label: "018" }
  ]);

  const originOptions = [
    { value: "011", label: "011" },
    { value: "016", label: "016" },
    { value: "017", label: "017" },
    { value: "018", label: "018" }
  ];

  return (
    <Container>
      <Phone>
        <ContainerInner>
          <Input
            type="select"
            title="Origem"
            options={originOptions}
            onChange={i => {
              setOrigin(i.value);
              if (i.value !== "011") {
                setDestinationOptions([{ value: "011", label: "011" }]);
              } else {
                setDestinationOptions([
                  { value: "016", label: "016" },
                  { value: "017", label: "017" },
                  { value: "018", label: "018" }
                ]);
              }
            }}
          />
          <Input
            type="select"
            title="Destino"
            options={destinationOptions}
            onChange={i => {
              setDestino(i.value);
            }}
          />
          <Input
            title="Tempo"
            value={tempo}
            onChange={event => {
              setTempo(event.target.value);
            }}
          />
        </ContainerInner>
      </Phone>
      <RenderTax tempo={tempo} destino={destino} origin={origin} />
    </Container>
  );
}
