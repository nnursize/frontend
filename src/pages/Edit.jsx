import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css"

const Edit=()=>{

    const state=useLocation().state;
    const navigate=useNavigate();
    const [value,setValue]=useState(state?.name||"");
    const [name,setName]=useState(state?.summary||"");
   // const [summary,setSummary]=useState(state?.summary);
    const [image,setImg]=useState(state?.img||null);
    const [genre,setGenre]=useState(state?.genre||"");
    const [cast,setCast]=useState(state?.cast||"");
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
        <div>
            <h3 className="h3-current">Film Bilgileri </h3>
        <div className="update-film-data">
        <div className="update-panel">
            <div className="labels-update-panel">
                <b className="label-edit">Film Adı: </b>
                <b className="label-edit">Film Afişi: </b>
                <b className="label-edit">Çıkış Yılı: </b>
                <b className="label-edit">Türü: </b>
                <b className="label-edit">Süresi: </b>
                <b className="label-edit">Oyuncular: </b>
            </div>
            <div className="input-update-panel">
                <input type="text" className="input-box" placeholder="Film adı giriniz" value={name} onChange={e=>setName(e.target.value)} />
                <input type="file" className="input-box" accept=".jpg, .png" onChange={e=>setImg(e.target.files[0])} />
                <input type="text" className="input-box" placeholder="Yıl bilgisi giriniz" value={year} onChange={e=>setYear(e.target.value)} />
                <input type="text" className="input-box" placeholder="Tür bilgisi giriniz" value={genre} onChange={e=>setGenre(e.target.value)} />
                <input type="text" className="input-box" placeholder="Süre bilgisi giriniz" value={duration} onChange={e=>setDuration(e.target.value)} />
                <input type="text" className="input-box" placeholder="Film oyuncularını giriniz" value={cast} onChange={e=>setCast(e.target.value)} />
                <div className="buttons">
                    <button onClick={handleClick}>Update</button>
                </div> 
            </div>
        </div>

            <div className="current-film-details">
                <div className="labels-update-panel">
                    <b className="label-edit">Film Adı: </b>
                    <b className="label-edit">Film Afişi: </b>
                    <b className="label-edit">Çıkış Yılı: </b>
                    <b className="label-edit">Türü: </b>
                    <b className="label-edit">Süresi: </b>
                    <b className="label-edit">Oyuncular: </b>
                </div>
                <div className="input-update-panel">
                    <input className="input-box" type="text" value={name} readOnly />
                    <span className="poster-link input-box" onClick={image}>Afiş</span>
                    <input className="input-box" type="text" value={year} readOnly />
                    <input className="input-box" type="text" value={genre} readOnly />
                    <input className="input-box" type="text" value={duration} readOnly />
                    <input className="input-box" type="text" value={cast} readOnly />
                </div>
            </div>
        </div>  
        </div>  
    )
}

export default Edit