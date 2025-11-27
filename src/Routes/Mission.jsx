// Mission.jsx
import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import IMAGES from "../assets/images";
import HeroComp from "../Components/HeroComp";
// import { HeroHeading, HeroParagraph, ImgShadow } from "../Styles/MissionStyles";

const Mission = () => {
  return (
    <main>
      <HeroComp
        $heroImage={IMAGES.image1}
        className="text-center bg-white d-flex flex-column align-items-center justify-content-center"
      >
        <div className="container mt-5 pt-5 text-center">
          <h1 className="display-4 fw-bold">
            <span className="word-span">Our</span> Mission
          </h1>
        </div>
      </HeroComp>

      <section className="py-5 mx-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h2 className="fw-bold">Inspiring the Next Generation</h2>
              <p className="mt-3">
                Our mission is to build a platform that inspires young
                musicians, students, and jazz lovers to connect deeply with the
                rich heritage of Jazz music. We are committed to keeping Jazz
                alive by giving it a home online where people can listen, learn,
                and grow.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={IMAGES.image5}
                alt="Mission Image"
                className="img-fluid image-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-secondary-subtle">
        <div className="container">
          <div className="row align-items-center g-4 flex-md-row-reverse">
            <div className="col-md-6">
              <h2 className="fw-bold">Accessible Jazz Anytime, Anywhere</h2>
              <p className="mt-3">
                We aim to provide a seamless, responsive, and modern listening
                experience. Whether on mobile or desktop, our mission is to
                ensure the beauty of Jazz is never more than a tap away.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={IMAGES.image6}
                alt="Mission Image 2"
                className="img-fluid image-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Building a Global Jazz Community</h2>
          <p className="mx-auto" style={{ maxWidth: "700px;" }}>
            We believe Jazz is more than music — it's a shared experience.
            Through this platform, we aim to connect listeners from across the
            world, creating a space where Jazz is celebrated, preserved, and
            passed on.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Mission;
