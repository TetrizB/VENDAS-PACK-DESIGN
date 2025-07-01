
import React from 'react';
import ActionButton from './ActionButton';

const FixedCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/50 backdrop-blur-sm p-4 z-50 border-t border-yellow-400/30">
      <ActionButton />
    </div>
  );
};

export default FixedCTA;
