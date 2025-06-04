import React from 'react';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="w-full bg-neutralDark py-4 shadow-inner">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <p className="text-textGray mb-2 md:mb-0">
          © 2023 - Diego López. All rights reserved.
        </p>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-primaryStart font-medium hover:text-primaryMid transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </footer>
  );
}
