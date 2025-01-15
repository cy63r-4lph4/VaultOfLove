import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CarouselItem {
  title: string;
  description: string;
  image: string;
}

interface InfiniteCarouselProps {
  elements: CarouselItem[];
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ elements }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!elements || elements.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % elements.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [elements]);

  if (!elements || elements.length === 0) {
    return <p className="text-gray-400 text-center">No stories to display.</p>;
  }

  return (
    <section className="mt-16 px-6 py-8 text-center bg-gradient-to-r from-gray-800 to-gray-900">
      <h2 className="text-4xl font-semibold text-indigo-400">The Unscripted Journey</h2>
      
      <div className="relative overflow-hidden w-full flex justify-center items-center mt-8">
        <motion.div
          className="flex space-x-6"
          initial={{ x: 0 }}
          animate={{ x: `-${activeIndex * 280+ 120}px` }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ width: "max-content" }}
        >
          {[...elements, ...elements].map((dynamic, index) => (
            <motion.div
              key={`${dynamic.title}-${index}`}
              className={`w-64 p-6 bg-gray-700 shadow-lg rounded-lg flex flex-col items-center transition-transform duration-300 ${
                index % elements.length === activeIndex ? "scale-110 opacity-100" : "opacity-50"
              }`}
            >
              <img src={dynamic.image} alt={dynamic.title} className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-indigo-300">{dynamic.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
        {elements[activeIndex].description}
      </p>
      <p className="mt-2 text-gray-300 text-lg max-w-2xl mx-auto">
        Every twist, every turn—your story is an unscripted masterpiece.  
        <br />It's not just a moment; it's your legacy.  
        <br /><span className="text-highlight-pink">The world is waiting to hear it.</span>
      </p>
    </section>
  );
};

export default InfiniteCarousel;
