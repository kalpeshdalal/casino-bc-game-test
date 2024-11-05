import React, { useState } from 'react'
import InputComp from '../components/InputComp'
import PrimaryButton from '../components/PrimaryButton'
import dropdown from '../asset/dropdown.svg'
import checkImg from '../asset/checkImg.svg'


const SignUp = () => {
    const [email, setEMail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='mx-5 text-iconClr'>
            <h1 className='py-5 font-extrabold leading-[21px] text-white'>Sign Up</h1>

            <div className=' space-y-3'>
                <InputComp type='text' placeholder="Email / Phone Number" value={email} />
                <InputComp type='text' placeholder="password" value={password} />
            </div>

            <div className='flex  font-extrabold mt-3'>Enter Referral / Promo Code <img src={dropdown} /></div>

            <div className='mt-3 ' >
                <div className='flex'>
                    <img src={checkImg} style={{ marginRight: "15px"}} />
                    <div>I agree to the <span className='text-white'>User Agreement</span> & confirm I am at least 18 years old</div>
                </div>
                <div className='flex mt-2'>
                    <img src={checkImg} style={{ marginRight: "15px" }} />
                    <div>I agree to receive marketing promotions from BC.GAME.</div>
                </div>
            </div>

            <PrimaryButton buttonLabel="Sign In" btnClass="w-full mt-6 mb-6" />

            <div className='text-xs font-extrabold mt-3'>Already have an account?<span className='ml-2 text-primaryClr'>Sign In</span></div>
        </div>
    )
}

export default SignUp