'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const GetNewQuote = ({ id }) => {
    const router = useRouter();

    return (
        <button className='button button--getnew' onClick={() => { router.refresh() }}> Get another one! </button>
    )
}

export default GetNewQuote