import axios from 'axios'
import React,{useState} from 'react'

const Register = () => {
    const [name,setName]=useState('')
    const [mobile,setMobile]=useState('')
    const [id,setId]=useState('')
    const [pass,setPass]=useState('')
    console.log(name,mobile,id,pass)

    const handleClick=()=>{
        const user={name:name,mobile:mobile,id:id,pass:pass}
        axios.post('http://localhost:5000/registeruser',user)
    }

    return (
        <div>
           <label>Name:</label> 
           <input type='text' onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name"/>
           <label>Mobile:</label> 
           <input type='text' onChange={(e)=>setMobile(e.target.value)} placeholder="Enter your Mobile Number"/>
           <label>UserID:</label> 
           <input type='text' onChange={(e)=>setId(e.target.value)} placeholder="Enter your ID"/>
           <label>Password:</label> 
           <input type='text' onChange={(e)=>setPass(e.target.value)} placeholder="Enter your Password"/>
           <button className='btn btn-primary' onClick={handleClick}>Submit</button>
        </div>
    )
}
export default Register
