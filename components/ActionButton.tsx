
import React from 'react';

const ActionButton: React.FC = () => {
  const handleClick = () => {
    // In a real scenario, this would redirect to a checkout page.
    console.log("Checkout button clicked!");
  };

  return (
    <button 
      onClick={handleClick}
      className="w-full max-w-lg mx-auto block bg-yellow-400 text-gray-900 font-black text-xl md:text-2xl uppercase p-5 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out glow-effect animate-pulse"
    >
      QUERO O PACK AGORA 🔥
    </button>
  );
};

export default ActionButton;
