import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InfiniteCarousel from "../components/InfiniteCarousel";

const captions = [
  "A love story written in the stars...",
  "Every heartbeat, a moment locked in time...",
  "Your story is more than words—it's a legacy...",
  "Some love stories are felt beyond time itself...",
  "What if your love story was eternal?",
];

const storyDynamics = [
  { 
    title: "Pain", 
    description: "Pain is the fire that forges us, turning heartbreak into strength.", 
    image: "/images/dynamics_pain.jpeg" 
  },
  { 
    title: "Betrayal", 
    description: "The deepest wounds come from those we trust, but they also teach us resilience.", 
    image: "/images/dynamics_betrayal.jpeg" 
  },
  { 
    title: "Lost", 
    description: "In losing something, we often find ourselves anew—sometimes in the arms of another story.", 
    image: "/images/dynamics_loss.jpeg" 
  },
  { 
    title: "Regret", 
    description: "Regret lingers like an unfinished love letter, urging us to write a better ending.", 
    image: "/images/dynamics_regret.jpeg" 
  },
  { 
    title: "Loneliness", 
    description: "Even in solitude, love echoes in the spaces between our thoughts.", 
    image: "/images/dynamics_loneliness.jpeg" 
  },
  { 
    title: "Fear", 
    description: "Love demands courage—the fear of losing it is proof of its power.", 
    image: "/images/dynamics_fear.jpeg" 
  },
  { 
    title: "Trust", 
    description: "Every great love story is built on the delicate bridge of trust.", 
    image: "/images/dynamics_trust.jpeg" 
  },
  { 
    title: "Passion", 
    description: "Passion ignites the soul, turning fleeting moments into unforgettable memories.", 
    image: "/images/dynamics_passion.jpeg" 
  },
  { 
    title: "Dreams", 
    description: "Love fuels the wildest dreams—because every great romance is a dream come true.", 
    image: "/images/dynamics_dreams.jpeg" 
  },
  { 
    title: "Breakthrough", 
    description: "Love’s true power is revealed in moments of clarity, when the heart finally understands what it desires.", 
    image: "/images/dynamics_breakthrough.jpeg" 
  },
  { 
    title: "Love", 
    description: "Love is not just a feeling, but a choice—to stay, to believe, and to build a forever.", 
    image: "/images/dynamics_love.jpeg" 
  }
];


const Home = () => {
  const [captionIndex, setCaptionIndex] = useState(0);
  const [writePicIndex, setWritePicIndex] = useState(0);
  const [sharePicIndex, setSharePicIndex] = useState(0);
  const [explorePicIndex, setExplorePicIndex] = useState(0);

  const random = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    const interval = setInterval(() => {
      setCaptionIndex((prevIndex) => (prevIndex + 1) % captions.length);
    }, 3500);

    const picInterval = setInterval(() => {
      setSharePicIndex(random(0, 3));
      setWritePicIndex(random(0, 2));
      setExplorePicIndex(random(0, 7));
    }, 4500);

   

    return () => {
      clearInterval(interval);
      clearInterval(picInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral text-white">
      <div className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-50"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        ></motion.div>

        <div className="absolute inset-0 bg-glass-dark backdrop-blur-sm"></div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-highlight-pink to-highlight-blue"
            key={captionIndex}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
          >
            {captions[captionIndex]}
          </motion.h1>
          <p className="mt-4 text-lg text-gray-300">Every love story is unique. Make yours unforgettable.</p>
          <button className="mt-6 btn btn-primary btn-lg transition-transform duration-300 hover:scale-105">
            Start Your Story
          </button>
        </div>
      </div>

      
      <section className="mt-16 px-6">
        <h2 className="text-4xl font-semibold text-center text-highlight-pink">Featured Stories</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "A Love Beyond Time", description: "Two souls destined to meet in every lifetime, defying time and fate." },
            { title: "The Digital Soulmates", description: "A love story born on the blockchain, proving love transcends physical boundaries." },
            { title: "Forever Etched on Chain", description: "A tale of love, loss, and eternity, immortalized on the blockchain." }
          ].map((story, index) => (
            <div key={index} className="bg-glass-dark p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <h3 className="text-xl font-semibold">{story.title}</h3>
              <p className="text-gray-400 mt-2">{story.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
    <a href="/explore" className="text-indigo-400 hover:underline text-lg font-semibold">Explore More Stories →</a>
  </div>
      </section>

      {/* Floating Story Dynamics Section */}
      <InfiniteCarousel elements={storyDynamics} />

      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-highlight-blue">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {["Write", "Share", "Explore"].map((step, index) => (
              <motion.div
                key={index}
                className="p-6 bg-glass-dark shadow-lg rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-xl font-semibold">{step}</h3>
                <motion.img
                  src={`/images/${step.toLowerCase()}_${index === 0 ? writePicIndex : index === 1 ? sharePicIndex : explorePicIndex}.jpeg`}
                  alt={`${step} Love Stories`}
                  className="rounded-lg mb-4 transition-opacity duration-1000 opacity-80 hover:opacity-100"
                />
                <p className="text-gray-300 mt-2">
                  {step === "Write" && "Pour your heart out and craft a love story that will live on forever."}
                  {step === "Share" && "Share your story with the world and let your words inspire generations."}
                  {step === "Explore" && "Discover heartwarming love stories and connect with a community of romantics."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 px-6">
        <h2 className="text-4xl font-semibold text-center text-highlight-pink">Mint Your Love Story</h2>
        <div className="mt-8 flex justify-center">
          <div className="card bg-glass-dark shadow-md p-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 max-w-sm">
            <img
              src="/images/nft.jpg"
              alt="Mint Your Love Story NFT"
              className="rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold text-primary">Forever on the Blockchain</h2>
            <p className="text-gray-300">
              Immortalize your love story as a unique NFT on the blockchain, ensuring it lasts forever.
            </p>
            <button className="mt-4 btn btn-secondary transition-transform duration-300 hover:scale-105">
              Mint Now 💎
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <h2 className="text-4xl font-semibold text-highlight-blue">Your Love Story Deserves to Be Told</h2>
        <p className="text-gray-400 mt-2">Join a global collection of love stories on the blockchain.</p>
        <button className="mt-6 btn btn-secondary btn-lg transition-transform duration-300 hover:scale-105">
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default Home;
