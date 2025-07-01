
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center pt-12 md:pt-20">
      <h1 className="text-4xl md:text-6xl font-black uppercase bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 animate-gradient-x">
        🎯 CHEGA DE SOFRER PRA FAZER ARTE
      </h1>
      <h2 className="text-4xl md:text-6xl font-black uppercase text-white mt-2">
        PEGA TUDO PRONTO AQUI!
      </h2>
      <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-gray-300 font-light">
        +150 artes profissionais prontas pra editar e postar no <span className="font-bold text-yellow-300">Canva, Photoshop e PowerPoint</span>. É só colar sua logo e já era.
      </p>
    </header>
  );
};

export default Header;
