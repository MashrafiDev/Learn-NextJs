import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1>About Page</h1>
            <Link href='/About/address' className='underline'>Go To Address Page</Link>
        </div>
    );
};

export default page;