// Mission.jsx
import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import IMAGES from "../assets/images";
import HeroComp from "../Components/HeroComp";

const Mission = () => {
  return (
    <main>
      <HeroComp
        $heroImage={IMAGES.seoula_mic}
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
              <div className="mt-3 fw-bold h2">
                To build a corporate empire that includes and not limited to
                music, farm and restaurants that generates employment
                opportunities for the vast majority of youths of today
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={IMAGES.image1}
                alt="Mission Image"
                className="img-fluid image-shadow rounded-4 shadow-lg"
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
                src={IMAGES.image9}
                alt="Mission Image 2"
                className="img-fluid image-shadow rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Mission;
