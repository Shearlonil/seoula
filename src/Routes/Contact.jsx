import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import { Wrapper } from "../Styles/Contact";

const Contact = () => {
  return (
    <Wrapper>
      {/* Hero Header */}
      <section className="contact-hero text-white position-relative">
        <div className="overlay"></div>

        <div className="container position-relative text-center py-5">
          <motion.h1
            className="display-4 bricolage-grotesque fw-bold mb-3"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Connect & Collaborate
          </motion.h1>

          <motion.p
            className="lead mulish"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Bookings, collaborations, or soulful conversations—reach out
            anytime.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-8">
              <div className="card card-jazz p-4 shadow-sm">
                <h3 className="bricolage-grotesque mb-4">Drop a Note</h3>

                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-4"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control form-control-lg rounded-4"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>

                  <div className="mt-4 mb-4">
                    <textarea
                      className="form-control form-control-lg rounded-4"
                      rows="6"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <button className="btn custom-btn w-100 py-3 rounded-pill">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Info Panel */}
            <div className="col-lg-4">
              <div className="card card-jazz p-4 h-100 shadow-sm">
                <h3 className="bricolage-grotesque mb-4">Contact Details</h3>

                <h4 className="bricolage-grotesque mb-4">Ogundele Oluwatosin Femi</h4>

                <div className="d-flex flex-column mb-3 gap-3">
                  <div className="d-flex">
                    <FaPhone className="text-primary fs-5 me-3" />
                    <span className="mulish">+234 706 649 1895</span>
                  </div>
                  <div className="d-flex">
                    <FaPhone className="text-primary fs-5 me-3" />
                    <span className="mulish">+234 807 627 5473</span>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <TbWorldWww className="text-primary fs-5 me-3" />
                  <span className="mulish">www.seoula.com</span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <FaEnvelope className="text-primary fs-5 me-3" />
                  <span className="mulish">tosinogundele409@gmail.com</span>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <FaMapMarkerAlt className="text-primary fs-5 me-3" />
                  <span className="mulish">Abeokuta, Ogun State, Nigeria.</span>
                </div>

                <h5>
                  Agents performace dates and location will be announced soon.
                </h5>

                <h6 className="mulish fw-bold">Social</h6>
                <div className="d-flex gap-3 mt-2">
                  <a href="#" className="social-icon">
                    <FaFacebook className="fs-4" />
                  </a>
                  <a href="#" className="social-icon">
                    <FaInstagram className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Contact;
