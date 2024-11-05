import React from 'react'
import posterImage from '../asset/authHeader.png'
import close from '../asset/close.svg'

const AuthHeader = () => {
    return (
        <header className='relative' >

            <img src={posterImage} style={{ width: '100%' }} alt="Poster" />

        </header>
    )
}

export default AuthHeader