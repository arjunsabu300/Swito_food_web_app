import React from 'react';

const FeatureCard = ({ icon, label }) => {
  return (
    <div className="bg-[#2d1f13] w-52 h-24 rounded-lg shadow-md flex items-center justify-center gap-2 text-orange-400 text-lg">
      <span className="text-2xl">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default FeatureCard;
