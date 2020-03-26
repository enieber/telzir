import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px;
  flex-wrap: wrap;
`;

export const ContainerInner = styled.div`
  overflow-y: scroll;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
`;
