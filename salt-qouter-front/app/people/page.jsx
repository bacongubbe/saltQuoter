import Link from 'next/link';
import React from 'react'

const getAllPeople = async () => {
    const allPeople = await fetch(`http://localhost:8080/saltquoter/people`, { next: { revalidate: 1 } });
    return allPeople.json();
};

const page = async () => {

    const allPeople = await getAllPeople();

    return (
        <div className='quote__list'>
            <h3 className='quote-list__title'>Here are all of them:</h3>
            {allPeople.map(person => {
                return <li className='quote__list__item' key={person.id}><Link className='link' href={`/people/${person.id}`}>{person.name}</Link></li>
            })}
        </div>
    )
}

export default page