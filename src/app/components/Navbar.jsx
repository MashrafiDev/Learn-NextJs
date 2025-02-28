import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-center bg-amber-50'>
            <ul className='flex justify-between w-1/2 py-6'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/features'>Features</Link></li>
                <li><Link href='/About'>About</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;