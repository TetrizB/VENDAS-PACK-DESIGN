
import React from 'react';

const testimonials = [
    {
        name: "Júnior M.",
        message: "Mano, sério. Eu vendi 3 serviços de social media só usando essas artes. Salvou demais!",
        avatar: "https://picsum.photos/id/1005/100/100"
    },
    {
        name: "Carla S.",
        message: "Só fiz copiar e colar, mudei as cores e a cliente amou kkkk. Nem acredito que foi tão fácil.",
        avatar: "https://picsum.photos/id/1011/100/100"
    },
    {
        name: "Fernando L.",
        message: "Tava gastando uma grana com designer. Com esse pack economizei mais de R$200 logo de cara. Valeu!",
        avatar: "https://picsum.photos/id/1027/100/100"
    }
];

const TestimonialCard: React.FC<{ name: string; message: string; avatar: string }> = ({ name, message, avatar }) => (
    <div className="bg-[#054740] p-4 rounded-xl rounded-bl-none relative max-w-sm">
        <div className="absolute -left-3 -bottom-2 w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-[#054740]"></div>
        <div className="flex items-center mb-2">
            <img src={avatar} alt={`Avatar de ${name}`} className="w-10 h-10 rounded-full mr-3" />
            <p className="font-bold text-gray-200">{name}</p>
        </div>
        <p className="text-gray-300 italic">"{message}"</p>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section className="my-16 md:my-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Quem usou, <span className="text-green-400">APROVOU!</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 justify-items-center">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
