'use client';
import { useRouter } from 'next/navigation';
import { React } from 'react';


const Favourite = ({ id, favourite }) => {
    const router = useRouter();

    const handleClick = e => {
        console.log(`quote ${id} has status ${favourite}`)
        fetch(`http://localhost:8080/saltquoter/quotes/${id}`, {
            method: 'PUT'
        }).then(res => console.log(res))
        router.refresh();
    }

    return (
        <button className='button--favourite button' onClick={handleClick}>{favourite ? '★' : '☆'}</button>
    )
}

export default Favourite