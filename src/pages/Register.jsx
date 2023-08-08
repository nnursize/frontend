import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Register=()=>{
    const [inputs,setInputs]=useState({
        username:"",
        email:"",
        age:null,
        password:"",
        role:"",
    });

    const[err,setError]=useState(null);
    const navigate=useNavigate();

    const handleChange=(e)=>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
    };

    const handleRegister=async e=>{ //api req
        e.preventDefault();      //no refresh

        try {
            await axios.post("/auth/register", inputs); 
            navigate("/login");
        } catch (err) {
            setError(err.response.data);
        }
        
    };

    return(
        <div className='auth'>
            <h1>Register</h1>
            <form>
                <input required type="text" placeholder='Username' name="username" onChange={handleChange}/>
                <input required type="email" placeholder='Email' name="email" onChange={handleChange}/>
                <input required type="number" placeholder='age' name="age" onChange={handleChange}/>
                <input required type="password" placeholder='Password' name="password" onChange={handleChange}/>
                <input required type="text" placeholder='Role' name="role" onChange={handleChange}/>
                <button onClick={handleRegister}>Register</button>
                {err && <p>{err}</p>}
                <span>
                    If you have an account. <Link to= "/login">Login</Link>
                </span>
            </form>
        </div>
    )
}

export default Register