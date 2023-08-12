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
        if(((inputs.username!=="") && (inputs.username!==null))&&((inputs.email!=="") && (inputs.email!==null))&&(inputs.age!==null)&&((inputs.password!=="") && (inputs.password!==null))&&((inputs.role!=="") && (inputs.role!==null)) ){
            try {
                await axios.post("/auth/register", inputs); 
                navigate("/login");
            } catch (err) {
                setError(err.response.data);
            }
        }
        else{
            setError("Please complete the form.");
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
                <label>
                    Role: 
                    <input type="radio" name="role" placeholder='Role' value="user" onChange={handleChange}/>
                    user
                </label>
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