import { motion } from "framer-motion";
import TrackCard from "../Components/TrackCard";
import IMAGES from "../assets/images";
import HeroComp from "../Components/HeroComp";

import Track1 from "../assets/Tracks/01 Track 1.mp3";
import Track2 from "../assets/Tracks/02 Track 2.mp3";
import Track3 from "../assets/Tracks/03 Track 3.mp3";
import Track4 from "../assets/Tracks/04 Track 4.mp3";
import Track5 from "../assets/Tracks/05 Track 5.mp3";

const allTracks = [
  {
    id: 1,
    title: "Track 1",
    duration: "4:32",
    cover: IMAGES.track_img1,
    audio: Track1,
  },
  {
    id: 2,
    title: "Track 2",
    duration: "5:18",
    cover: IMAGES.track_img1,
    audio: Track2,
  },
  {
    id: 3,
    title: "Track 3",
    duration: "3:55",
    cover: IMAGES.track_img1,
    audio: Track3,
  },
  {
    id: 4,
    title: "Track 4",
    duration: "6:12",
    cover: IMAGES.track_img1,
    audio: Track4,
  },
  {
    id: 5,
    title: "Track 5",
    duration: "4:45",
    cover: IMAGES.track_img1,
    audio: Track5,
  },
  {
    id: 6,
    title: "Track 3",
    duration: "5:30",
    cover: IMAGES.track_img1,
    audio: Track3,
  },
  {
    id: 7,
    title: "Track 3",
    duration: "4:10",
    cover: IMAGES.track_img1,
    audio: Track3,
  },
  {
    id: 8,
    title: "Track 3",
    duration: "5:05",
    cover: IMAGES.track_img1,
    audio: Track3,
  },
];

const Music = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroComp $heroImage={IMAGES.image1}>
        <div className="container text-center">
          <h1 className="display-3 bricolage-grotesque mb-3">
            The <span className="word-span">Collection</span>
          </h1>
          <p className="lead mulish">Vibrant tracks to fuel your playlist</p>
        </div>
      </HeroComp>

      {/* Track Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {allTracks.map((track) => (
              <motion.div
                key={track.id}
                className="col-xl-3 col-lg-4 col-md-6"
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
