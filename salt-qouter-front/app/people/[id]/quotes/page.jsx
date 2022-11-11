import React from 'react'
import AddQuote from '../../../(components)/AddQuote';
import Quote from '../../../(components)/Quote';
import Link from 'next/link';

const getQuotes = async (id) => {
    const allQuotes = await fetch(`http://localhost:8080/saltquoter/people/${id}/quotes/all`, { next: {revalidate: 1}});
    return allQuotes.json();
}

const page = async ({ params }) => {

    const allQuotes = await getQuotes(params.id);

    return (
        <div className='quote__list'>
            <h3 className='quote-list__title'>This is everything that {allQuotes[0].person.name} has uttered: </h3>
            {allQuotes.map(quote => {
                return (
                    <div key={quote.id} className='quote__list__item'>
                        <Quote className='quote__list__link link' id={quote.id} quote={quote.quote} favourite={quote.favourite} />
                        <Link className='quote__list__link--edit-remove link' href={`/quotes/edit/${quote.id}`} >Edit / remove</Link>
                    </div>
                )
            })}
            <div>
                <AddQuote name={allQuotes[0].person.name} id={params.id} />
            </div>
        </div>
    )
}

export default page