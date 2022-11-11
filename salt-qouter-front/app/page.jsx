import Link from 'next/link'
import React from 'react'

const Home = () => {
    return (
        <div className='home'>
            <h1 className='home__title'>Welcome to SaltQuoter! </h1>
            <Link className='link home__link' href={"/people"}>Go to all people</Link>
            <Link className='link home__link' href={"/favourites"}> Go to favourites </Link>
        </div>

    )
}

export default Home