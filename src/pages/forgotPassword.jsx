import React, { useState } from 'react'
import InputComp from '../components/InputComp'
import PrimaryButton from '../components/PrimaryButton'
import leftArrow from '../asset/leftArrow.svg'
import { Link, useNavigate } from 'react-router-dom'


const ForgotPassword = () => {

    const [email, setEMail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleBackToLogin = () => {
        navigate('/login');
    };
    return (
        <div className='mx-5 text-iconClr'>
            <h1 className='py-5 font-extrabold leading-[21px] text-white'>Reset Password</h1>

            <div className=' space-y-3'>
                <InputComp type='text' placeholder="Email / Phone Number" value={email} />
            </div>



            <PrimaryButton buttonLabel="Reset Password" btnClass="w-full mt-6 mb-6" />

            {/* <div className='text-xs font-extrabold mt-3 flex justify-center items-center' onClick={handleBackToLogin}><img src={leftArrow}/> Back to Login</div> */}
            <Link to="/login" className='text-xs font-extrabold mt-3 flex justify-center items-center'>
                <img src={leftArrow} alt="Back" /> Back to Login
            </Link>
        </div>
    )
}

export default ForgotPassword