"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {

    const router = useRouter();

    const isLogged = false

    const handlerNavigateAddressPage = () => {
        if (isLogged) {
            router.push('/About/address')
        } else {
            router.push('/')
        }
    }
    return (
        <div>
            <h1>About Page</h1>
            Next Link: <Link href='/About/address' className='underline'>Go To Address Page</Link>
            <br />
            Next Navigation: <button onClick={handlerNavigateAddressPage} type='button' href='/About/address' className='underline cursor-pointer'>Go To Address Page</button>
        </div>
    );
};

export default page;