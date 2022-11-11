import React from 'react'
import EditPersonForm from '../../(components)/EditPersonForm'

const page = () => {
    return (
        <div className='edit-person-page'>
            <h3 className='page-header'>Add a person?</h3>
            <EditPersonForm />
        </div>
    )
}

export default page