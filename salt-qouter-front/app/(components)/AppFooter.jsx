import Link from 'next/link'
import React from 'react'

const AppFooter = () => {
    return (
        <footer className='main-footer'>
            <Link className='main-footer__link link' href={'/people/edit'}> Add person </Link>
            <Link className='main-footer__link link' href={'/quotes/edit'}> Heard something new? </Link>
        </footer>
    )
}

export default AppFooter