import React from 'react'
import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const Auth = () => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  console.log(auth?.currentUser)

  const chnageHandler = (e) => {
    const { name, value } = e.target
    if (name === 'email') {
      setEmail(value)
    } else {
      setPassword(value)
    }
  }

  const signinWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error(error)      
    }
    // console.log(response)
  }

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error(error)
    }
  }


  
  const signin = async (e) => {
    try {
      e.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error(error)
    }
    
    // console.log(response)
    // console.log(auth?.currentUser)

  }

  return (
    <div className=' flex flex-col justify-center items-center h-screen'>
      <form onSubmit={signin} className=' items-center'>
        <label htmlFor="">
          <p>Enter Email</p>
          <input type="email" name='email' className=' shadow-orange-900 text-green-600' onChange={chnageHandler} value={email} />
        </label>

        <label htmlFor="">
          <p>Enter Password</p>
          <input type="password" name='password' onChange={chnageHandler} value={password} />
        </label>

        <button type='submit' className=' p-4 border border-green-700 '>Sign in</button>
      </form>

      <button onClick={signinWithGoogle} className=' p-4 border border-red-500 '>
        Sign in With Google
      </button>

      <br />

      <button onClick={logout} className=' p-4 border border-red-500 mt-4 '>
        LogOut
      </button>

      <img src={auth?.currentUser?.photoURL} alt="" className=' mt-4'/>
        
    </div>
  )
}

export default Auth