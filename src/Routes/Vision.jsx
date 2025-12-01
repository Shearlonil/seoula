import IMAGES from "../assets/images";
import HeroComp from "../Components/HeroComp";

const VisionGallery = [
  IMAGES.image4,
  IMAGES.image7,
  IMAGES.image5,
  IMAGES.image8,
];

const Vision = () => {
  return (
    <>
      <section className="my-5">
        <div className="container py-3">
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">
                <span className="word-span">Vision</span>
              </h1>
              <p className="mt-3 h3">
                To trail the performances of the best players in the world on
                classical guitar example: Earl Klugh, Chet Atkins, Peter White,
                Marc Antonie, Andres Segovia, Carlo Pezzimenti and many more
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={IMAGES.image6}
                className="img-fluid vision-img main-img rounded-4"
                alt="Vision Img 1"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container text-center">
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
    </>
  );
};

export default Vision;
