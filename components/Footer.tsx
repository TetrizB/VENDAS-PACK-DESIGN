
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-center py-10 border-t border-gray-800 text-gray-400">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-2 flex items-center justify-center bg-green-500/20 text-green-400 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h4 className="font-bold text-white">Garantia de 7 Dias</h4>
                    <p className="text-sm">Risco zero! Seu dinheiro de volta se não gostar.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-2 flex items-center justify-center bg-blue-500/20 text-blue-400 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h4 className="font-bold text-white">Compra 100% Segura</h4>
                    <p className="text-sm">Seus dados estão protegidos.</p>
                </div>
                <div className="flex flex-col items-center">
                     <div className="w-16 h-16 mb-2 flex items-center justify-center bg-red-500/20 text-red-400 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h4 className="font-bold text-white">Vagas Limitadas</h4>
                    <p className="text-sm">Oferta pode encerrar a qualquer momento.</p>
                </div>
            </div>
            <p className="text-xs mt-8">© 2024 Pack de Design PRO. Todos os direitos reservados. Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
        </footer>
    );
};

export default Footer;
