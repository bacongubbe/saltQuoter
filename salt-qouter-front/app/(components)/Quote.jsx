import React from 'react'
import Favourite from './Favourite'

const Quote = ({ id, quote, favourite }) => {
    return (
        <div className='quote'>
            <p className='quote__text'>{quote ? `"${quote}"` : ''}</p>
            {quote && <Favourite id={id} favourite={favourite} />}
        </div>
    )
}

export default Quote