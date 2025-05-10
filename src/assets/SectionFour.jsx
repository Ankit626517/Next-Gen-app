import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import vrGames from './Vrjson.json'; // Adjust path if needed

function SectionFour() {
  const [visibleCount, setVisibleCount] = useState(6); // initially show 6 cards

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3); // show 3 more on each click
  };

  return (
    <div className="py-12 px-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-600">🎮 Popular VR Games</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {vrGames.slice(0, visibleCount).map((game) => (
          <div
            key={game.id}
            data-aos="fade-up"
            className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 text-white p-6 rounded-3xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-2">{game.name}</h2>
            <p className="text-sm text-white/90 mb-4">{game.description}</p>
            <span className="inline-block bg-white text-indigo-600 font-semibold px-3 py-1 rounded-full">
              ⭐ {game.rating}
            </span>
          </div>
        ))}
      </div>

      {visibleCount < vrGames.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleSeeMore}
            className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-xl focus:ring-4 focus:ring-indigo-300 animate-bounce-slow"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}

export default SectionFour;
