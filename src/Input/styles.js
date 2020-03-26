import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 10px;
`;

export const Label = styled.label`
  padding-bottom: 10px;
  font-size: 1em;
`

export const Input = styled.input`
  padding: 10px;
  border: 2px solid #babaca;
  border-radius: 5px;

  &:focus {
    border: 2px solid #1664d0;
  }
`
