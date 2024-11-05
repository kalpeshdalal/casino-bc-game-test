import React, { useState } from 'react'
import InputComp from '../components/InputComp'
import PrimaryButton from '../components/PrimaryButton'

const Login = () => {
  const [email, setEMail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='mx-5'>
      <h1 className='py-5 font-extrabold leading-[21px]'>Sign In</h1>

      <div className=' space-y-3'>
        <InputComp type='text' placeholder="Email / Phone Number" value={email} />
        <InputComp type='text' placeholder="password" value={password} />
      </div>
      <div>
        <div className='text-xs font-extrabold text-iconClr mt-4 text-right'>Forgot your password?</div>
      </div>

      <PrimaryButton buttonLabel="Sign In" btnClass="w-full mt-6 mb-6"/>

      <div className='text-xs font-extrabold'>New to BC.GAME?<span className='ml-2 text-primaryClr'>Create account</span></div>
    </div>
  )
}

export default Login