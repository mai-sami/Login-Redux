import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../featurs/userSlice'
import './login.css'
function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();

const handelSubmit=(e)=>{
    e.preventDefault()
    dispatch(login({
        name:name,
        email:email,
     password:password,
     LoggedIn:true    
    }));
    //الي جوا ducer
  };

    return (
        <div className='login'>
            <form className='login__form' onSubmit={(e)=>handelSubmit(e)}>
                <h1>Login Here</h1>
                <input type="text"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password"
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='submit__button'>Login</button>
            </form>
        </div>
    )
}

export default Login
