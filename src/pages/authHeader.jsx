import React from 'react'
import posterImage from '../asset/authHeader.png'
import close from '../asset/close.svg'

const AuthHeader = () => {
    return (
        <div className='relative' >

            <img src={posterImage} style={{ width: '100%' }} alt="Poster" />

        </div>
    )
}

export default AuthHeader