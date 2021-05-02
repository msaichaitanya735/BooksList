import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [id,setId]=useState('')
    const [pass,setPass]=useState('')
    console.log(id,pass)
    const clickSignup=()=>{
    }
    return (
        <div>
           <label>UserID:</label> 
           <input type='text' onChange={(e)=>setId(e.target.value)} placeholder="Enter your ID"/>
           <label>Password:</label> 
           <input type='text' onChange={(e)=>setPass(e.target.value)} placeholder="Enter your Password"/>
           <button className='btn btn-primary'>Submit</button>
           <Link to="/register"><button className='btn btn-danger' onClick={clickSignup}>SignUp</button></Link>
        </div>
    )
}

export default Login
