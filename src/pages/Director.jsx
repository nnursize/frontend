import React, { useState,useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Director=()=>{

    const state=useLocation().state;
    const [name,setName]=useState(state?.director_name||"");
    const [nationality,setNationality]=useState(state?.nationality||"");
    const [directors,setDirectors]=useState([]);

    useEffect(()=>{
        const fetchAll = async() =>{
            try {
                const res2= await axios.get(`/directors/`)
                setDirectors(res2.data);

            } catch (err) {
                console.log(err)
            }
        };
        fetchAll()
    },[]);

    const handleClick=async e=>{
        e.preventDefault();

        try {
            await axios.post(`/directors/`, {
                director_name:name,
                nationality:nationality,
            })
            const res2= await axios.get(`/directors/`)
            setDirectors(res2.data);
        } catch (err) {
            console.log(err);
        }
    };

    //console.log(value);
    return(
        <div className="director">
            <div className="contentDirector">
                <div className="t1">
                <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
                </div>
                <div className="t2">
                <input type="text" placeholder="Nationality" value={nationality} onChange={e=>setNationality(e.target.value)}/>
                </div>
                <div className="buttons">
                    <button className="btn" onClick={handleClick}>Add</button>
                </div>    
            </div>
            <div className="showInfo">
                {directors.map((dir)=>(
                    <div className="directorInfos"> Director: {dir.director_name}, {dir.nationality}</div>
                ))}
            </div>
        </div>
    )
}

export default Director