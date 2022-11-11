import Link from 'next/link'
import React from 'react'

const MainHeader = () => {
    return (
        <header className='main-header'>
            <h1 className='main-header__title'>SaltQuoter - haxxday (innit)</h1>
            <nav className='main-header__nav'>
                <Link className='main-header__nav__link link' href={'/'}>Go home</Link>
                <Link className='main-header__nav__link link' href={'/people'}>See all people</Link>
                <Link className='main-header__nav__link link' href={'/favourites'}>Go to favourites</Link>
                <Link className='main-header__nav__link link' href={'/quotes'}>See all quotes</Link>
            </nav>
        </header>
    )
}

export default MainHeader