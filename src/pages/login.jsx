import React, { useState } from 'react'
import InputComp from '../components/InputComp'
import PrimaryButton from '../components/PrimaryButton'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEMail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='mx-5'>
      <h1 className='py-5 font-extrabold leading-[21px]'>Sign In</h1>

      <div className=' space-y-3 mb-4'>
        <InputComp type='text' placeholder="Email / Phone Number" value={email} onChange={(e)=>setEMail(e.target.value)} className=''/>
        <InputComp type='password' placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <div>
        <Link to="/forgot-password" className='text-xs font-extrabold text-iconClr  text-right'>Forgot your password?</Link>
      </div>

      <PrimaryButton buttonLabel="Sign In" btnClass="w-full mt-6 mb-6 h-10 text-xs"/>

      <div className='text-xs font-extrabold'>New to BC.GAME?<Link to="/sign-up"  className='ml-2 text-primaryClr'>Create account</Link></div>
    </div>
  )
}

export default Login