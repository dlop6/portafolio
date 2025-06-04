import React from 'react';
import { FiTerminal } from 'react-icons/fi';

export default function TerminalBadge() {
  return (
    <div className="w-52 h-64 md:w-64 md:h-80 bg-neutralDark flex items-center justify-center rounded-3xl border-4 border-primaryMid shadow-[0_0_8px_#ff8c00] transform -rotate-6 hover:rotate-0 transition-transform duration-500">
      <FiTerminal className="text-primaryStart" size={64} />
    </div>
  );
}
