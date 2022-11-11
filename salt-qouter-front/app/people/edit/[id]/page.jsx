import React from 'react'
import DeleteItem from '../../../(components)/DeleteItem';
import EditPersonForm from '../../../(components)/EditPersonForm'

const getPerson = async (id) => {
    const randomQuote = await fetch(`http://localhost:8080/saltquoter/people/${id}/`, { next: { revalidate: 1 } });
    return randomQuote.json();
}

const page = async ({ params }) => {

    const person = await getPerson(params.id);

    return (
        <div className='edit-person-page'>
            <h3 className='page-header'>edit person?</h3>
            <EditPersonForm id={person.id} name={person.name} />
            <DeleteItem id={person.id} type={'person'} />
        </div>
    )
}

export default page