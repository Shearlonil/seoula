import styled from "styled-components";

export const HeroSection = styled.section`
  background: linear-gradient(
    to right,
    white 55%,
    rgba(240, 240, 255, 0.7) 55%
  );
  padding: 110px 0;
  /* margin: 110px 0; */
  position: relative;

  @media (max-width: 991px) {
    background: white;
    padding: 80px 0;
  }
`;

export const HeroImageWrapper = styled.div`
  position: relative;

  .soft-bg {
    position: absolute;
    inset: -25px;
    background: rgba(99, 102, 241, 0.2);
    filter: blur(70px);
    border-radius: 30px;
    z-index: 1;
  }

  .main-img {
    position: relative;
    z-index: 2;
    border-radius: 25px;
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.08);
  }
`;

export const HeroHeading = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  // font-family: "PinyonScript-Regular";
  font-family: "Bricolage Grotesque";
  color: #111827;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const HeroParagraph = styled.p`
  font-size: 1.25rem;
  font-family: "Mulish", serif;
  line-height: 1.7;
  margin-bottom: 1rem;
  color: #4b5563; /* soft gray for good readability */

  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;

export const FeaturedSection = styled.section`
  background: #f8fafc;
  padding: 80px 0;
`;

export const SectionHeading = styled.h2`
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

export const SectionSubtext = styled.p`
  text-align: center;
  font-size: 1.15rem;
  font-family: "Mulish", serif;
  color: #6b7280;
`;

export const ExperienceSection = styled.section`
  background: #0f172a;
  color: white;
  padding: 80px 0;
`;

export const ExperienceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 28px;
  border-radius: 20px;
  box-shadow: var(--white-color);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const AboutPreviewSection = styled.section`
  background: white;
  color: #1e1b4b;
  padding: 80px 0;
`;

export const NewsletterSection = styled.section`
  background: #312e81;
  color: white;
  padding: 80px 0;
`;

export const NewsletterInput = styled.input`
  border-radius: 40px;
  padding: 12px 20px;
  max-width: 300px;
  border: none;
  outline: none;
`;
export const ExperienceWrapperB = styled.div`
  .experience-section {
    background: #1e1b4b;
  }

  .exp-card {
    color: white;
    box-shadow: var(--jazz-shadow);

    /* background: #f8f9fa; */
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
  }

  .exp-card:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .exp-card .icon {
    color: var(--secondary-color);
  }
`;
