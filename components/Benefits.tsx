
import React from 'react';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-400 flex-shrink-0 mr-3" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const benefits = [
    "Templates pra feed, stories, reels e tráfego pago",
    "Mockups profissionais e identidade visual completa",
    "Acesso vitalício e download imediato após a compra",
    "Suporte rápido e direto por WhatsApp pra tirar dúvidas",
    "Serve pra loja, serviço, produto digital, afiliado... qualquer nicho!"
];

const Benefits: React.FC = () => {
    return (
        <section className="my-16 md:my-24">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">O que você vai levar? 🤔</h3>
                <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                            <CheckIcon />
                            <span className="text-lg text-gray-200">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Benefits;
