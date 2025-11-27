import IMAGES from "../assets/images";
import HeroComp from "../Components/HeroComp";

const VisionGallery = [
  IMAGES.image1,
  IMAGES.image4,
  IMAGES.image6,
  IMAGES.image5,
];

const Vision = () => {
  return (
    <>
      <HeroComp $heroImage={IMAGES.image7}>
        <div className="container">
          <h1 className="display-4 fw-bold">
            Our <span className="word-span">Vision</span>
          </h1>
        </div>
      </HeroComp>
      <section className="my-5">
        <div className="container py-3">
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold">Where Jazz Meets Innovation</h2>
              <p className="mt-3">
                Our vision is to merge the timeless elegance of Jazz with the
                power of modern technology — creating a space where music,
                storytelling, and digital experiences evolve together.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="images/vision-img1.jpg"
                className="img-fluid vision-img"
                alt="Vision Img 1"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">A Visual Glimpse Into Our Future</h2>
          <div className="row g-3">
            {VisionGallery.map((img, index) => (
              <div className="col-12 col-sm-6 col-md-3" key={index}>
                <img
                  src={img}
                  className="img-fluid gallery-image"
                  alt={`Vision ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">A Global Legacy of Jazz</h2>
          <p className="mx-auto" style={{ maxWidth: "700px" }}>
            We envision a world where Jazz remains a universal language —
            connecting cultures, inspiring creativity, and teaching the beauty
            of rhythm and expression. Through this platform, we aim to build a
            global legacy that future generations will cherish.
          </p>
        </div>
      </section>{" "}
    </>
  );
};

export default Vision;
