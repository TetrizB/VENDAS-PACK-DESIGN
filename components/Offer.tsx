
import React from 'react';
import Timer from './Timer';

const Offer: React.FC = () => {
    return (
        <section className="my-16 md:my-24 p-6 md:p-10 bg-gradient-to-br from-purple-900 via-red-900 to-yellow-800 rounded-2xl border-2 border-yellow-400 text-center">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-white">OFERTA DE LANÇAMENTO</h2>
            <p className="text-lg text-yellow-300 font-semibold">Válida só HOJE – depois volta pro preço cheio!</p>

            <div className="my-6">
                <p className="text-2xl md:text-3xl text-gray-400 line-through">De R$297</p>
                <p className="text-gray-200">por apenas</p>
                <p className="text-7xl md:text-8xl font-black text-yellow-400 text-glow my-2">R$27</p>
                <p className="text-xl text-white">à vista ou 2x de R$14,50 no Pix/Cartão</p>
            </div>
            
            <Timer />
        </section>
    );
};

export default Offer;
