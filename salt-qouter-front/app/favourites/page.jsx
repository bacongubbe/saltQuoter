import Link from 'next/link';
import React from 'react'
import Quote from '../(components)/Quote';

const getQuotes = async (id) => {
    const allQuotes = await fetch(`http://localhost:8080/saltquoter/quotes/favourites`, { next: { revalidate: 1 } });
    return allQuotes.json();
}

const page = async ({ params }) => {

    const allQuotes = await getQuotes(params.id);

    return (
        <div className='quote__list'>
            <h3 className='quote-list__title'>Here are your favourite Quotes:</h3>
            {allQuotes.map(quote => {
                return (
                    <div className='quote__list__item' key={quote.id}>
                        <Quote id={quote.id} quote={quote.quote} favourite={quote.favourite} />
                        <p className='quote-list__item__text'> ⎯ <Link className='quote__list__link link' href={`/people/${quote.person.id}`}> {quote.person.name}</Link> </p>
                    </div>
                )
            })}
        </div>
    )
}

export default page