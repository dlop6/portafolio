import React from 'react';

export default function CardSection({ title, colorClass, children }) {
  return (
    <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
      <h3 className={`text-2xl font-bold mb-4 ${colorClass}`}>{title}</h3>
      {children}
    </div>
  );
}
