import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaTrophy,
  FaMusic,
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaMicrophoneAlt,
  FaHeadphonesAlt,
} from "react-icons/fa";

import SportImg1 from "../assets/Img/sport-1.jpg";
import SportImg2 from "../assets/Img/sport-2.jpg";
import SportImg3 from "../assets/Img/sport-3.jpg";
import SportImg4 from "../assets/Img/sport-4.jpg";
import SportImg5 from "../assets/Img/sport-5.jpg";

import IMAGES from "../assets/images";
import { Wrapper } from "../Styles/About";
const timeline = [
  {
    year: "2015",
    event: "Debut Album 'Midnight Echoes'",
    icon: <FaMusic />,
    color: "primary",
  },
  {
    year: "2018",
    event: "Montreal Jazz Festival Headliner",
    icon: <FaMicrophoneAlt />,
    color: "secondary",
  },
  {
    year: "2020",
    event: "Best Emerging Jazz Artist Award",
    icon: <FaTrophy />,
    color: "success",
  },
  {
    year: "2023",
    event: "Global Tour • 15 Countries",
    icon: <FaHeadphonesAlt />,
    color: "warning",
  },
];

const albums = [
  { title: "Midnight Echoes", cover: IMAGES.track_img1 },
  { title: "Blue Velvet Dreams", cover: IMAGES.track_img1 },
  { title: "Golden Hour Swing", cover: IMAGES.track_img1 },
  { title: "Urban Echoes", cover: IMAGES.track_img1 },
];

const galleryImages = [
  IMAGES.image4,
  IMAGES.image5,
];

const sportGallery = [SportImg1, SportImg2, SportImg3, SportImg4, SportImg5];

const About = () => {
  return (
    <div className="my-5 py-5 container">
      {/* HERO */}
      <h1 className="display-4 fw-bold text-center mt-3">
        Band <span className="word-span">Stand</span>
      </h1>
          <motion.p
            className="lead mulish mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            On the Classical guitar <span className="fw-bold">Ogundele Tosin</span>{" "}
            had a degree in Health Studies (Health Education Programme Planning) with a Second Major in Music and studied the Classical guitar in the United States with my teacher Carlo
            Pezzimenti who was a student of Andres Segovia in Spain.
          </motion.p>
      {/* BIOGRAPHY */}
      <section className="py-5 bg-light shadow-lg">
        <div className="container text-center">
          <motion.p
            className="lead mulish mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            My hero has been Earl Klugh since 1979 and i have tried to play the classical guitar both in Jazz and Classical styles and even beyond (POP, Country, Blues, etc.)
          </motion.p>
          <motion.p
            className="mulish fs-5 mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The rest of the band are providing basic rhythmic back-up (accompanyment) and includes Segun Adesina on Keyboard, Steve Drums on Drums, Ibukun, Kushimo on drums and conga, Dayo
            on Bass and Leke sax on Saxophone.
          </motion.p>
        </div>
      </section>

      {/* SPORTS SECTION */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center display-5 bricolage-grotesque mb-4">
            SE’OULA in Sports
          </h2>

          <p className="mulish fs-5 text-center mb-5">
            Playing Classical guitar at the age of 22 (1982) in the US means
            "Dexterity". Most Classical guitarists started as early as age 5. My
            athletical background - Primary School Relay team representative,
            first eleven soccer team in Primary and Secondary schools
            (Principals cup), paved the way for a determined pursuit of the
            Classical guitar. I am still currently very athletically active. 
          </p>
          <p className="mulish fs-5 text-center mb-5">
            The
            name Se'uola means a rendezvous and entertainment of
            happy rich people.
          </p>

          <div className="row g-4 justify-content-center">
            {sportGallery.map((img, i) => {
              if (i == sportGallery.length - 1) {
                return (
                  <img
                    key={"unique"}
                    src={SportImg5}
                    alt={`Sport ${"i"}`}
                    className="img-fluid rounded-4 shadow-sm gallery-image"
                  />
                );
              } else {
                return (
                  <motion.div
                    key={i}
                    className="col-12 col-sm-6 col-md-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={img}
                      alt={`Sport ${i}`}
                      className="img-fluid rounded-4 shadow-sm gallery-image"
                    />
                  </motion.div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
