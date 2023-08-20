import React, { useState,useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Actor=()=>{

    const state=useLocation().state;
    const [name,setName]=useState(state?.actor_name||"");
    const [experience,setExperience]=useState(state?.years_of_experience||null);
    const [actors,setActors]=useState([]);

    useEffect(()=>{
        const fetchAll = async() =>{
            try {
                const res2= await axios.get(`/actors/`)
                setActors(res2.data);

            } catch (err) {
                console.log(err)
            }
        };
        fetchAll()
    },[]);

    const handleClick=async e=>{
        e.preventDefault();

        try {
            await axios.post(`/actors/`, {
                actor_name:name,
                years_of_experience:experience,
            })
            const res2= await axios.get(`/actors/`)
            setActors(res2.data);
        } catch (err) {
            console.log(err);
        }
    };

    return(
        <div className="actor">
            <div className="contentActor">
                <div className="t1">
                <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
                </div>
                <div className="t2">
                <input type="number" placeholder="Years Of Experience" value={experience} onChange={e=>setExperience(e.target.value)}/>
                </div>
                <div className="buttons">
                    <button className="btn" onClick={handleClick}>Add</button>
                </div>    
            </div>
            <div className="showInfo">
                {actors.map((act)=>(
                    <div className="actorInfos"> Actor: {act.actor_name}, {act.years_of_experience} </div>
                ))}
            </div>
        </div>
    )
}

export default Actor