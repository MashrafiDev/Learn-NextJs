import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-center bg-amber-50'>
            <ul className='flex justify-between w-1/2 py-6'>
                <li>Home</li>
                <li>Features</li>
                <li>About</li>
            </ul>
        </div>
    );
};

export default Navbar;