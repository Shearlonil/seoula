import { motion } from "framer-motion";
import TrackCard from "../Components/TrackCard";
import IMAGES from "../assets/images";
import HeroComp from "../Components/HeroComp";

import Civilization from "../assets/Tracks/Civilization.mp3";
import OnTheWingsOfLove from "../assets/Tracks/On_the_wings_of_love.mp3";
import PerfectFour from "../assets/Tracks/perfect_four.mp3";
import ForYourLoveAndItsCozOfYou from "../assets/Tracks/for_your_love_and-its_coz_of_u.mp3";
import AfroFunk from "../assets/Tracks/afro_funk.mp3";

const allTracks = [
  {
    id: 1,
    title: "Civilization",
    duration: "4:32",
    cover: IMAGES.track_img1,
    audio: Civilization,
  },
  {
    id: 2,
    title: "On The Wings Of Love",
    duration: "5:18",
    cover: IMAGES.track_img1,
    audio: OnTheWingsOfLove,
  },
  {
    id: 3,
    title: "Perfect Four",
    duration: "3:55",
    cover: IMAGES.track_img1,
    audio: PerfectFour,
  },
  {
    id: 4,
    title: "For Your Love And It's Just Because Of You",
    duration: "6:12",
    cover: IMAGES.track_img1,
    audio: ForYourLoveAndItsCozOfYou,
  },
  {
    id: 5,
    title: "Afro Funk",
    duration: "4:45",
    cover: IMAGES.track_img1,
    audio: AfroFunk,
  },
];

const Music = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroComp $heroImage={IMAGES.seoula_mic}></HeroComp>
      <h1 className="display-3 bricolage-grotesque container mt-2 pt-5">
        <span className="word-span">Tracks</span>
      </h1>

      {/* Track Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {allTracks.map((track) => (
              <motion.div
                key={track.id}
                className="col-xl-3 col-lg-4 col-3 col-md-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <TrackCard track={track} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Music;
