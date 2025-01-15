import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModeSelectionProps {
  onSelectMode: (mode: "normal" | "interactive") => void;
}

const ModeSelection: React.FC<ModeSelectionProps> = ({ onSelectMode }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-900 text-white p-8 rounded-lg shadow-lg max-w-lg text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">Choose Your Reading Mode</h2>
          <p className="text-gray-400 mb-6">How would you like to experience this story?</p>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectMode("normal")}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold transition"
            >
              Normal Mode (Classic Reading)
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectMode("interactive")}
              className="w-full py-3 bg-pink-500 hover:bg-pink-600 rounded-md font-semibold transition"
            >
              Interactive Mode (Immersive Experience)
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModeSelection;
