
import React from 'react';
import Header from './components/Header';
import Benefits from './components/Benefits';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import Bonus from './components/Bonus';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FixedCTA from './components/FixedCTA';
import ActionButton from './components/ActionButton';

const App: React.FC = () => {
  return (
    <div className="bg-[#100f14] min-h-screen text-white antialiased overflow-x-hidden">
      <div className="relative z-10 container mx-auto px-4 pb-32">
        
        <Header />
        
        <div className="my-8 md:my-12">
          <ActionButton />
        </div>

        <Benefits />

        <Offer />

        <div className="my-8 md:my-12">
          <ActionButton />
        </div>

        <Testimonials />

        <Bonus />

        <div className="my-8 md:my-12">
          <ActionButton />
        </div>

        <FAQ />

        <Footer />
      </div>

      <FixedCTA />
    </div>
  );
};

export default App;
