import React from "react";
import { Link } from "react-router-dom";
import {
  FaPlay,
  FaMusic,
  FaSeedling,
  FaFootballBall,
} from "react-icons/fa";
import { motion } from "framer-motion";

import IMAGES from "../assets/images";
import {
  HeroHeading,
  HeroImageWrapper,
  HeroParagraph,
  HeroSection,
} from "../Styles/Home";

const details = [
  {
    icon: <FaMusic size={40} />,
    title: "Jazz — The Art of Expression",
    desc: "The rhythm, harmony, and improvisation of Se'Oula’s jazz represent freedom, creativity, and emotional storytelling.",
  },
  {
    icon: <FaSeedling size={40} />,
    title: "Farming — Growth & Sustainability",
    desc: "Rooted in community impact, Se'Oula supports agriculture, sustainable food systems, and empowerment for local farmers.",
  },
  {
    icon: <FaFootballBall size={40} />,
    title: "Sports — Strength & Unity",
    desc: "Sports reflect resilience and discipline, promoting healthy living and youth development within the community.",
  },
];

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection>
        <div className="container">
          <div className="row align-items-center py-5">
            {/* LEFT TEXT */}
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* <h1 className='imperial-script-regular'>SE'OULA</h1> */}
              <HeroHeading>SE'OULA</HeroHeading>

              <h3>Site Under construction</h3>

              <HeroParagraph>
                Se'oula was conceived with the admiration and love for the
                classical guitar
              </HeroParagraph>

              <HeroParagraph>
                The Inspirational diversity of past and contemporary works for the classical guitar is the motivation for these recordings
              </HeroParagraph>

              <HeroParagraph className="mb-4">
                However, the blend of Traditional Jazz, Contemporary Jazz, Classical and movie sound tracks for the entertainment industry is also a passionate area of interest.
              </HeroParagraph>

              <HeroParagraph className="mb-4">Please stay tuned.</HeroParagraph>

              <Link to="/music" className="btn custom-btn btn-lg px-4 py-3">
                <FaPlay className="me-2" /> Start Listening
              </Link>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="col-lg-5 mt-5 mt-lg-0 text-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <HeroImageWrapper>
                <div className="soft-bg"></div>
                <img
                  src={IMAGES.image2}
                  className="img-fluid main-img rounded-4"
                />
              </HeroImageWrapper>
            </motion.div>
          </div>
        </div>
      </HeroSection>
    </>
  );
};

export default Home;
