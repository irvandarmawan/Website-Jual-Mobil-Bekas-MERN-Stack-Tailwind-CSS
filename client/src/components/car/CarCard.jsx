import React from 'react';

const CarCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all">
      <img className="w-full h-48 object-cover rounded-t-2xl" alt="Car" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-dark">Car Title Placeholder</h3>
        <p className="text-2xl font-semibold text-primary">Rp 0</p>
        <div className="flex gap-2 text-sm text-gray-500 mt-2">Specifications Placeholder</div>
      </div>
    </div>
  );
};

export default CarCard;
