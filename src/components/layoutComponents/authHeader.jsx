import React from 'react'
import posterImage from '../../assets/background/authHeader.png'

const AuthHeader = () => {
    return (
        <header className='relative' >

            <img src={posterImage} style={{ width: '100%' }} alt="Poster" />

        </header>
    )
}

export default AuthHeader