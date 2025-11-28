// Mission.jsx
import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import IMAGES from "../assets/images";
import HeroComp from "../Components/HeroComp";

const Mission = () => {
  return (
    <main>
      <section className="py-5 mx-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-4 mt-5">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">
                Mission
              </h1>
              <div className="mt-3 fw-bold h2">
                To build a corporate empire that includes and not limited to
                music, farm and restaurants that generates employment
                opportunities for the vast majority of youths of today
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column gap-4">
              <img
                src={IMAGES.image1}
                alt="Mission Image"
                className="img-fluid image-shadow rounded-4 shadow-lg"
              />
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
