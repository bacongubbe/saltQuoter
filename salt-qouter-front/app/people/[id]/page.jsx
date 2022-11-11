import Link from 'next/link';
import React from 'react'
import AddQuote from '../../(components)/AddQuote';
import GetNewQuote from '../../(components)/GetNewQuote';
import RandomQuote from '../../(components)/RandomQuote';

const getPerson = async (id) => {
    const person = await fetch(`http://localhost:8080/saltquoter/people/${id}/`, { next: { revalidate: 1 } });
    return person.json();
}

const page = async ({ params }) => {

    const person = await getPerson(params.id);

    return (
        <>
            <article className='person--random-quote'>
                <img src={person.imageTop} alt={person.name} className={'image image-top'} />
                <RandomQuote id={person.id} />
                <img src={person.imageBottom} alt={person.name} className={'image image-bottom'} />
                <GetNewQuote id={person.id} />
            </article>
            <div>
                <Link className='link' href={`/people/edit/${person.id}`} >Edit {person.name}</Link>
                <Link className='link' href={`/people/${person.id}/quotes/`} >See all {person.name} quotes</Link>
                <div><p>{`Heard ${person.name} say something else?`}</p>
                    <AddQuote id={person.id} /></div>
            </div>
        </>
    )
}

export default page