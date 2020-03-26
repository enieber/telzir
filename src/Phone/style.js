import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: content-box;
  z-index: 5;
  width: 375px;
  height: 812px;
  padding: 26px;
  background: #fdfdfd;
  box-shadow: inset 0 0 11px 0 black;
  border-radius: 66px;
  margin: 10px;
  &:before {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    position: absolute;
    top: 5px;
    content: "";
    left: 5px;
    border-radius: 61px;
    background: black;
    z-index: 1;
  }
`;

export const Screen = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  z-index: 5;
  background: #84dcc6;
  overflow: hidden;
  display: block;
  border-radius: 1px;
  box-shadow: 0 0 0 3px #111;
  border-radius: 40px;
  box-shadow: none;
`;

export const Notch = styled.div`
  position: absolute;
  width: 210px;
  height: 30px;
  top: 26px;
  left: 108px;
  z-index: 10;
  background: black;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;

  &:before,
  &:after {
    content: "";
    height: 8px;
    position: absolute;
    top: 0;
    width: 8px;
  }

  &:after {
    background: radial-gradient(
      circle at bottom left,
      transparent 0,
      transparent 70%,
      black 70%,
      black 100%
    );
    left: -8px;
  }

  &:before {
    background: radial-gradient(
      circle at bottom right,
      transparent 0,
      transparent 70%,
      black 70%,
      black 100%
    );
    right: -8px;
  }
`;

export const Camera = styled.div`
  width: 6px;
  height: 6px;
  top: 9px;
  border-radius: 100%;
  position: absolute;
  left: 154px;
  background: #0d4d71;
`;

export const Speaker = styled.div`
  height: 6px;
  width: 60px;
  left: 50%;
  position: absolute;
  top: 9px;
  margin-left: -30px;
  background: #171818;
  border-radius: 6px;
`;

export const TopBar = styled.div`
  width: 100%;
  position: absolute;
  height: 8px;
  background: rgba(black, 0.1);
  left: 0;
  top: 80px;
`;

export const Overflow = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 66px;
  overflow: hidden;
`;

export const ShadowTR = styled.div`
  border-radius: 100%;
  width: 90px;
  height: 90px;
  position: absolute;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(255, 255, 255, 0) 60%
  );
  top: -20px;
  right: -20px;
`;

export const ShadowTL = styled.div`
  border-radius: 100%;
  width: 90px;
  height: 90px;
  position: absolute;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(255, 255, 255, 0) 60%
  );
  top: -20px;
  left: -20px;
`;

export const ShadowBR = styled.div`
  border-radius: 100%;
  width: 90px;
  height: 90px;
  position: absolute;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(255, 255, 255, 0) 60%
  );
  bottom: -20px;
  right: -20px;
`;

export const ShadowBL = styled.div`
  border-radius: 100%;
  width: 90px;
  height: 90px;
  position: absolute;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(255, 255, 255, 0) 60%
  );
  bottom: -20px;
  left: -20px;
`;

export const Sleep = styled.div`
  height: 96px;
  top: 200px;
  right: -3px;
`;

export const InnerShadow = styled.div`
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  position: absolute;
  top: 10px;
  overflow: hidden;
  left: 10px;
  border-radius: 56px;
  box-shadow: inset 0 0 15px 0 rgba(white, 0.66);
  z-index: 5;

  &:before {
    box-shadow: inset 0 0 20px 0 #ffffff;
    width: 100%;
    height: 116%;
    position: absolute;
    top: -8%;
    content: "";
    left: 0;
    border-radius: 200px / 112px;
    z-index: 1;
  }
`;
