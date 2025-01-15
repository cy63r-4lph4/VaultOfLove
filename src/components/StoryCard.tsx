import { motion } from "framer-motion";
import { FaHeart, FaEthereum } from "react-icons/fa";

interface StoryCardProps {
  story: {
    id: number;
    title: string;
    author: string;
    likes: number;
    nft: boolean;
    image: string;
  };
}

const StoryCard: React.FC<StoryCardProps> = ({ story: { title, author, likes, nft, image } }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`relative w-72 h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer
        ${nft ? "border-2 border-indigo-500" : "border border-gray-800"}`}
    >
      {/* Background Image */}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
        whileHover={{ scale: 1.1 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-5 left-4 right-4 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-300">by {author}</p>

        {/* Like & NFT Badge */}
        <div className="flex items-center justify-between mt-3">
          <motion.div whileHover={{ scale: 1.2 }} className="flex items-center space-x-2">
            <FaHeart color="red" />
            <span className="text-gray-300">{likes}</span>
          </motion.div>

          {nft && (
            <motion.div whileHover={{ scale: 1.2 }} className="flex items-center space-x-1">
              <FaEthereum color="#6366F1" />
              <span className="text-indigo-300 text-xs">NFT</span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default StoryCard;
