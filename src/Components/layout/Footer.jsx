import React from 'react';
import {Link} from 'react-scroll';

export default function Footer(){

    return (
        <nav className=' bottom-0 w-full bg-black shadow-md py-4 z-50'>
            <p>
                <span className='text-white px-10'>© 2023 -  Diego López All rights reserved.</span>
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='cursor-pointer hover:text-primary font-medium'
                >
                    Volver al inicio
                </Link>
            </p>
        </nav>

    );

}