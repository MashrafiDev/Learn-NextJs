import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div className='place-items-center place-content-center'>
            <h2>Not Found</h2>
            <p className='mb-4'>Could not find requested resource</p>
            <Link className='bg-green-300 px-4 py-3 rounded' href="/">Return Home</Link>
        </div>
    );
};

export default notFound;