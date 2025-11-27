import styled from "styled-components";

export const HeroWrapper = styled.div`
  background-image: ${(prop) => `url(${prop.$heroImage})`};
  background-size: cover;
  background-position: top;
  height: ${(prop) => `${prop.$height || "40vh"}`};
  width: 100%;
  position: relative;
  color: white;
  z-index: 10;

  .overlay {
    position: absolute;
    inset: 0;
    backdrop-filter: blur(3px);
    background: rgba(0, 0, 0, 0.35);
  }

  .child-1 {
    position: relative;
    z-index: 30;
    max-width: 700px;
  }
`;
