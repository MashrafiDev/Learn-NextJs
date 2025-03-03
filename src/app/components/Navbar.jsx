"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    if (!pathName.includes("dashboard")) {
        return (
            <div className='flex justify-center bg-amber-50'>
                <ul className='flex justify-between w-1/2 py-6'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/features'>Features</Link></li>
                    <li><Link href='/About'>About</Link></li>
                </ul>
            </div>
        );
    } else {
        return <></>
    }
};

export default Navbar;
