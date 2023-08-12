import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Edit=()=>{

    const state=useLocation().state;
    const navigate=useNavigate();
    const [value,setValue]=useState(state?.name||"");
    const [name,setName]=useState(state?.summary||"");
   // const [summary,setSummary]=useState(state?.summary);
    const [image,setImg]=useState(state?.img||null);
    const [genre,setGenre]=useState(state?.genre||"");
    const [duration,setDuration]=useState(state?.duration||null);
    const [year,setYear]=useState(state?.year||null);

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
            name,
            summary: value,
            img: image ? url : "",
            genre,
            duration,
            year,
          })
        : await axios.post(`/movies/`, {
            name,
            summary: value,
            img: image ? url : "",
            genre,
            duration,
            year,
          })
          navigate("/")
        } catch (err) {
            console.log(err);
        }
    };

    //console.log(value);
    return(
        <div className="Edit">
            <div className="content">
                <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
                <input type="number" placeholder="Duration" value={duration} onChange={e=>setDuration(e.target.value)}/>
                <input type="number" placeholder="Year" value={year} onChange={e=>setYear(e.target.value)}/>
                <div className="editorContainer">
                <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish </h1>
                        <span>
                            <b>Status</b> <b>Span</b>
                        </span>
                        <span>
                            <b>Visibility</b>Public
                        </span>            
                        <input style={{display:"none"}} type="file" name="" id="file" onChange={e=>setImg(e.target.files[0])}/> 
                        <label className="file" htmlFor="file">Upload image</label> 
                        <div className="buttons">
                            <button onClick={handleClick}>Update</button>
                        </div>     
                </div>
                <div className="item">
                    <h1>Genre</h1>
                    <div className="genre">
                     <input type="radio" checked={genre==="art"} name="genre" value="art" id="art" onChange={handleChange}/>
                     <label htmlFor="art">Art</label>
                    </div>
                    <div className="genre">
                     <input type="radio" checked={genre==="science"} name="genre" value="science" id="science" onChange={handleChange}/>
                     <label htmlFor="science">Science</label>
                    </div>
                    <div className="genre">
                     <input type="radio" checked={genre==="tech"} name="genre" value="tech" id="tech" onChange={handleChange}/>
                     <label htmlFor="tech">Tech</label>
                    </div>
                    <div className="genre">
                     <input type="radio" checked={genre==="cinema"} name="genre" value="cinema" id="cinema" onChange={handleChange}/>
                     <label htmlFor="cinema">Cinema</label>
                    </div>
                    <div className="genre">
                     <input type="radio" checked={genre==="design"} name="genre" value="design" id="design" onChange={handleChange}/>
                     <label htmlFor="design">Design</label>
                    </div>
                    <div className="genre">
                     <input type="radio" checked={genre==="food"} name="genre" value="food" id="food" onChange={handleChange}/>
                     <label htmlFor="food">Food</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit