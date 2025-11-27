import React from "react";
import { Link } from "react-router-dom";
import {
  FaPlay,
  FaArrowRight,
  FaMusic,
  FaHeadphones,
  FaSeedling,
  FaFootballBall,
} from "react-icons/fa";
import { motion } from "framer-motion";

import TrackCard from "../Components/TrackCard";
import IMAGES from "../assets/images";
import Track1 from "../assets/Tracks/01 Track 1.mp3";
import Track2 from "../assets/Tracks/02 Track 2.mp3";
import Track3 from "../assets/Tracks/03 Track 3.mp3";
import {
  AboutPreviewSection,
  ExperienceCard,
  ExperienceSection,
  HeroHeading,
  HeroImageWrapper,
  HeroParagraph,
  HeroSection,
  NewsletterSection,
} from "../Styles/Home";

const featuredTracks = [
  {
    id: 1,
    title: "Midnight Serenade",
    duration: "4:32",
    cover: IMAGES.track_img2,
    audio: Track1,
    mood: "soulful",
  },
  {
    id: 2,
    title: "Blue Velvet Dreams",
    duration: "5:18",
    cover: IMAGES.track_img2,
    audio: Track2,
    mood: "romantic",
  },
  {
    id: 3,
    title: "Golden Hour Swing",
    duration: "3:55",
    cover: IMAGES.track_img2,
    audio: Track3,
    mood: "uplifting",
  },
];
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
              <HeroHeading>SE'OULA</HeroHeading>

              <HeroParagraph>
                Se'oula was conceived with the admiration and love for the
                classical guitar — inspired by both contemporary and timeless
                works.
              </HeroParagraph>

              <HeroParagraph>
                Blending Traditional Jazz, Contemporary Jazz, Classical
                influences, and cinematic soundtracks, Se'Oula delivers a deeply
                expressive musical experience.
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

      {/* FEATURED TRACKS */}
      <section className="py-5 bg-light">
        <div className="container bg-dange">
          <div className="text-center mb-5">
            <h2 className="display-5 bricolage-grotesque fw-bold">
              Featured Tracks
            </h2>
            <p className="lead mulish text-muted">Experience the magic</p>
          </div>

          <div className="row g-4">
            {featuredTracks.map((track) => (
              <div key={track.id} className="col-lg-4 col-md-6">
                <TrackCard track={track} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExperienceSection>
        <section className="experience-section py-5 ">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 bricolage-grotesque mb-3">
                The Se’Oula Experience — Beyond Music
              </h2>
              <p className="lead px-md-5">
                Se’Oula stands at the intersection of creativity, growth, and
                vitality. What began with jazz now expands into farming and
                sports — three pillars shaping a vibrant and impactful identity.
              </p>
            </div>

            <div className="row g-4">
              {details.map((item, i) => (
                <div className="col-md-4" key={i}>
                  <ExperienceCard className="exp-card p-4 h-100">
                    <div className="icon mb-3">{item.icon}</div>
                    <h4 className="fw-bold mb-3">{item.title}</h4>
                    <p>{item.desc}</p>
                  </ExperienceCard>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ExperienceSection>

      {/* ABOUT PREVIEW */}
      <AboutPreviewSection className="bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
                alt="artist"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>

            <div className="col-lg-6">
              <h2 className="bricolage-grotesque fw-bold mb-3">
                Meet the Sound
              </h2>
              <p className="mulish mb-4 fs-5">
                SE'OULA blends timeless heritage with bold artistic evolution.
                Every melody tells a story—every rhythm breathes emotion.
              </p>

              <Link to="/about" className="btn custom-btn">
                Learn More <FaArrowRight className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </AboutPreviewSection>

      {/* NEWSLETTER */}
      <NewsletterSection className="py-5 text-center text-white">
        <div className="container">
          <h3 className="bricolage-grotesque mb-3">
            Stay Connected with SE'OULA
          </h3>
          <p className="mulish mb-4">
            Get new releases, updates, and exclusive content straight to your
            inbox.
          </p>

          <div className="d-flex justify-content-center gap-2 flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control w-auto"
              style={{
                borderRadius: "40px",
                padding: "10px 20px",
                maxWidth: "300px",
              }}
            />
            <button className="btn custom-btn px-4">Join Now</button>
          </div>
        </div>
      </NewsletterSection>
    </>
  );
};

export default Home;
