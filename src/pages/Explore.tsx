import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";
import StoryCard from "../components/StoryCard";
import { useState } from "react";

interface StoryItem {
  id: number;
  title: string;
  author: string;
  likes: number;
  image: string;
  nft: boolean;
}

const ExplorePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("trending");
  const [stories] = useState(dummyStories);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredStories = stories.filter((story: StoryItem) =>
    story.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="px-6 py-12 bg-gray-900 text-gray-300 min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-indigo-400">Explore Love Stories</h1>
        <p className="text-lg text-gray-400 mt-3">
          Discover timeless tales of love, passion, and serendipity.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <div className="relative w-full max-w-md">
          <IconContext.Provider value={{ className: "absolute left-4 top-3 text-gray-400 text-lg" }}>
            <FiSearch />
          </IconContext.Provider>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for stories..."
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <select
          className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 cursor-pointer hover:bg-gray-700 transition"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="trending">Trending</option>
          <option value="newest">Newest</option>
          <option value="most-liked">Most Liked</option>
          <option value="nft-stories">NFT Stories</option>
        </select>
      </div>

      {/* Trending Stories */}
      <section className="mb-14">
        <h2 className="text-3xl font-bold text-indigo-300 mb-6">🔥 Trending Stories</h2>
        <div className="flex overflow-x-auto space-x-6 p-2 scrollbar-hide">
          {filteredStories.slice(0, 5).map((story) => (
            <motion.div
              key={story.id}
              whileHover={{ scale: 1.08 }}
              className="w-64 flex-shrink-0 bg-gray-800 p-5 rounded-lg shadow-lg border border-gray-700 transition"
            >
              <StoryCard story={story} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stories Grid */}
      <section>
        <h2 className="text-3xl font-bold text-indigo-300 mb-6">📖 All Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <motion.div
              key={story.id}
              whileHover={{ scale: 1.05 }}
              className="transition"
            >
              <StoryCard story={story} />
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ExplorePage;

// Dummy Story Data
const dummyStories: StoryItem[] = [
  {
    id: 1,
    title: "A Love That Defied Time",
    author: "Sophia Carter",
    likes: 120,
    nft: true,
    image: "/VaultOfLove.png",
  },
  {
    id: 2,
    title: "The Letters We Never Sent",
    author: "James O'Neill",
    likes: 95,
    nft: false,
    image: "/images/beautiful.jpeg",
  },
  {
    id: 3,
    title: "Fate Brought Us Here",
    author: "Emily Rose",
    likes: 142,
    nft: true,
    image: "/images/nft.jpg",
  },
];
