
import React from 'react';

const Bonus: React.FC = () => {
    return (
        <section className="my-16 md:my-24 text-center">
             <div className="p-8 bg-gray-800 rounded-xl border-2 border-dashed border-yellow-400">
                <h2 className="text-3xl md:text-4xl font-black uppercase">
                    🎁 E AINDA TEM <span className="text-yellow-400">BÔNUS!</span>
                </h2>
                <p className="text-lg text-gray-300 mt-2">Comprando AGORA, você ainda leva de graça:</p>
                <div className="mt-6 space-y-4 text-left max-w-md mx-auto">
                    <div className="bg-purple-600/30 p-4 rounded-lg flex items-center">
                        <span className="text-3xl mr-4">🎬</span>
                        <div>
                           <h4 className="font-bold text-xl text-white">Mini-pack de Animações</h4>
                           <p className="text-gray-300">Vídeos curtos e animados para stories e reels que chamam atenção.</p>
                        </div>
                    </div>
                    <div className="bg-purple-600/30 p-4 rounded-lg flex items-center">
                        <span className="text-3xl mr-4">🖼️</span>
                        <div>
                           <h4 className="font-bold text-xl text-white">Lista com 50 Bancos de Imagens</h4>
                           <p className="text-gray-300">Os melhores sites (gratuitos e pagos) para encontrar fotos profissionais.</p>
                        </div>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default Bonus;
