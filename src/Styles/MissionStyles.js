// Mission.styles.js
import styled from "styled-components";
import IMAGES from "../assets/images";

export const Wrapper = styled.div`
  .hero-section {
    background: ${() => url(IMAGES.image1)}center / cover no-repeat;
    padding: 120px 0;
    color: white;
    text-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
  }
  .vision-img {
    border-radius: 12px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }
`;
