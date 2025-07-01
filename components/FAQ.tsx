
import React from 'react';

const faqData = [
    {
        question: "Preciso saber mexer em design?",
        answer: "Não! É só copiar e colar no Canva ou PowerPoint. Se souber o básico de Photoshop, também serve. Tudo foi feito pra ser super fácil."
    },
    {
        question: "O acesso é por quanto tempo?",
        answer: "O acesso é vitalício! Comprou uma vez, é seu para sempre, incluindo futuras atualizações simples."
    },
    {
        question: "Como recebo o material?",
        answer: "Assim que o pagamento for aprovado, você recebe um e-mail com o link para baixar todo o material na hora."
    },
    {
        question: "Serve para o meu nicho?",
        answer: "Sim! As artes são 100% editáveis. Você pode mudar cores, textos e imagens para adaptar para qualquer nicho, seja produto, serviço ou infoproduto."
    },
    {
        question: "E se eu não gostar?",
        answer: "Você tem 7 dias de garantia total. Se não for o que você esperava, é só pedir o reembolso e devolvemos 100% do seu dinheiro, sem perguntas."
    }
];

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
    <details className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden group">
        <summary className="p-4 flex justify-between items-center cursor-pointer font-bold text-lg hover:bg-gray-700/50">
            {question}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </summary>
        <div className="p-4 bg-gray-900 text-gray-300">
            {answer}
        </div>
    </details>
);

const FAQ: React.FC = () => {
    return (
        <section className="my-16 md:my-24 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Dúvidas Frequentes</h2>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
};

export default FAQ;
