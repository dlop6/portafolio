import React from 'react';

export default function CardSection({ title, colorClass, children }) {
  return (
    <div className="bg-neutralDark bg-opacity-90 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-primaryMid">
      <h3 className={`text-2xl font-bold mb-4 ${colorClass}`}>{title}</h3>
      {children}
    </div>
  );
}
