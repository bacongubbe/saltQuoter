import React from 'react'
import DeleteItem from '../../../(components)/DeleteItem';
import UpdateQuote from '../../../(components)/updateQuote';

const getQuote = async (id) => {
    const quote = await fetch(`http://localhost:8080/saltquoter/quotes/${id}`, { next: { revalidate: 1 } });
    return quote.json();
}

const page = async ({ params }) => {

    const quote = await getQuote(params.id);

    return (
        <div>
            {`${quote.quote} by ${quote.person.name}`}
            <UpdateQuote id={quote.id} person={quote.person.id} current={quote.quote} />
            <DeleteItem type={'quote'} id={quote.id} />
        </div>
    )
}

export default page