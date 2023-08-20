import React, { useContext } from "react"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../context/authContext";

const Login=()=>{

    const [inputs,setInputs]=useState({
        username:"",
        password:"",
    });

    const {login}=useContext(AuthContext);
    const[err,setError]=useState(null);
    const navigate=useNavigate();

    const handleLogin=async e=>{ //api req
        e.preventDefault();      //no refresh

        try {
            await login(inputs)
            navigate("/");
        } catch (err) {
            setError(err.response.data);
        }
        
    };

    const handleChange=(e)=>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
    };

    return(
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='Username' name="username" onChange={handleChange}/>
                <input type="password" placeholder='Password' name="password" onChange={handleChange}/>
                <button onClick={handleLogin}>Login</button>
                {err && <p>{err}</p>}
                <span>
                    Crete an account. <Link to= "/register">Register</Link>
                </span>
            </form>
        </div>
    )
}

export default Login