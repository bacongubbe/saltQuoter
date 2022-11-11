import React from 'react'
import Quote from './Quote';

const randomQuote = async (id) => {
    const quote = await fetch(`http://localhost:8080/saltquoter/people/${id}/quotes`);
    return quote.json();
}

const RandomQuote = async ({ id }) => {
    const quote = await randomQuote(id);

    return (
        <Quote quote={quote.quote} id={quote.id} favourite={quote.favourite} />
    )
}

export default RandomQuote