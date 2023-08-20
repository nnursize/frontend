import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Edit=()=>{

    const state=useLocation().state;
    const navigate=useNavigate();
    const [actr,setAct]=useState([]);
    const [drctr,setDrctr]=useState([]);
    const [actrid,setActid]=useState([]);
    const [drctrid,setDrctrid]=useState([]);
    const [value,setValue]=useState(state?.name||"");
    const [name,setName]=useState(state?.summary||"");
    const [image,setImg]=useState(state?.img||null);
    const [genre,setGenre]=useState(state?.genre||"");
    const [duration,setDuration]=useState(state?.duration||null);
    const [year,setYear]=useState(state?.year||null);

    useEffect(()=>{
        const fetchAll = async() =>{
            try {
                const res= await axios.get(`/actors/`)
                setAct(res.data);
                
                const res2= await axios.get(`/directors/`)
                setDrctr(res2.data);

            } catch (err) {
                console.log(err)
            }
        };
        fetchAll()
    },[]);

    const [selectedOptionsActor, setSelectedOptionsActor] = useState([]);
    const [selectedOptionsDirector, setSelectedOptionsDirector] = useState([]);

    const toggleOptionActor = (option,id) => {
        if (selectedOptionsActor.includes(option)) {
          setActid(actrid.filter(item => item !== id));
          setSelectedOptionsActor(selectedOptionsActor.filter(item => item !== option));
        } else {
          setActid([...actrid, id])
          setSelectedOptionsActor([...selectedOptionsActor, option]);
        }
      };

    const toggleOptionDirector = (option,id) => {
    if (selectedOptionsDirector.includes(option)) {
        setDrctrid(drctrid.filter(item => item !== id));
        setSelectedOptionsDirector(selectedOptionsDirector.filter(item => item !== option));
    } else {
        setDrctrid([...drctrid,id])
        setSelectedOptionsDirector([...selectedOptionsDirector, option]);
    }
    };

    const handleChange=(e)=>{
        setGenre(e.target.value);
    };

    const upload=async()=>{
        try {
            const formData=new FormData();
            formData.append("image",image)
            const res=await axios.post("/upload",formData);
            return res.data
        } catch (err) {
            console.log(err);
        }
    }

    const handleClick=async e=>{
        e.preventDefault();
        const url=await upload();
        try {
        state
        ? await axios.put(`/movies/${state.id}`, {
            name: value,
            summary: name,
            img: image ? url : "",
            genre,
            duration,
            year,
          })
        : await axios.post(`/movies/`, {
            name: value,
            summary: name,
            img: image ? url : "",
            genre,
            duration,
            year,
            actors:actrid,
            directors:drctrid,
          })
          navigate("/")
        } catch (err) {
            console.log(err);
        }
    };

    return(
        <div className="Edit">
            <div className="content">
                <input type="text" placeholder="Name" value={value} onChange={e=>setValue(e.target.value)}/>
                <input type="number" placeholder="Duration" value={duration} onChange={e=>setDuration(e.target.value)}/>
                <input type="number" placeholder="Year" value={year} onChange={e=>setYear(e.target.value)}/>
                
                <textarea value={name} placeholder="Summary" onChange={e=>setName(e.target.value)} className="inputboxedit"/>
                
                <h2>Select Directors</h2>
                <div className="options-container">
                    {state ? <div/> : drctr.map((option) => (
                    <label key={option.director_id} className="checkbox-label">
                        <input
                        type="checkbox"
                        value={option.director_name}
                        checked={selectedOptionsDirector.includes(option.director_name)}
                        onChange={() => toggleOptionDirector(option.director_name,option.director_id)}
                        />
                        {option.director_name}
                    </label>
                    ))} 
                </div>
                <p>Selected options: {selectedOptionsDirector.join(', ')}</p>

                <h2>Select Actors</h2>
                <div className="options-container">
                    {state ? <div/> : actr.map((option) => (
                    <label key={option.actor_id} className="checkbox-label">
                        <input
                        type="checkbox"
                        value={option.actor_name}
                        checked={selectedOptionsActor.includes(option.actor_name)}
                        onChange={() => toggleOptionActor(option.actor_name,option.actor_id)}
                        />
                        {option.actor_name}
                    </label>
                    ))}
                </div>
                <p>Selected options: {selectedOptionsActor.join(', ')}</p>
                
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish </h1>          
                        <input style={{display:"none"}} type="file" name="" id="file" onChange={e=>setImg(e.target.files[0])}/> 
                        <label className="file" htmlFor="file">Upload image</label> 
                        <div className="buttons">
                            <button onClick={handleClick}>Done</button>
                        </div>     
                </div>
                <div className="item">
                    <h1>Genre</h1>
                    <div className="genre">
                     <input type="radio" checked={genre==="comedy"} name="genre" value="comedy" id="comedy" onChange={handleChange}/>
                     <label htmlFor="comedy">Comedy</label>
                    </div>
                    <div className="genre">
                     <input type="radio" checked={genre==="drama"} name="genre" value="drama" id="drama" onChange={handleChange}/>
                     <label htmlFor="drama">Drama</label>
                    </div>
                    <div className="genre">
                     <input type="radio" checked={genre==="romance"} name="genre" value="romance" id="romance" onChange={handleChange}/>
                     <label htmlFor="romance">Romance</label>
                    </div>
                    <div className="genre">
                     <input type="radio" checked={genre==="scifi"} name="genre" value="scifi" id="scifi" onChange={handleChange}/>
                     <label htmlFor="scifi">Sci-Fi</label>
                    </div>
                    <div className="genre">
                     <input type="radio" checked={genre==="horror"} name="genre" value="horror" id="horror" onChange={handleChange}/>
                     <label htmlFor="horror">Horror</label>
                    </div>
                    <div className="genre">
                     <input type="radio" checked={genre==="adventure"} name="genre" value="adventure" id="adventure" onChange={handleChange}/>
                     <label htmlFor="adventure">Adventure</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit