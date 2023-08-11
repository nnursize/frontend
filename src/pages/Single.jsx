import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, useLocation } from "react-router-dom"

const Single=()=>{

    const [movie, setMovie]= useState({});
    const location=useLocation()
    const movie_id=location.pathname.split("/")[2]

    useEffect(()=>{
        const fetchAll = async() =>{
            try {
                const res= await axios.get(`/movies/${movie_id}`)
                console.log(res.data.genre)
                setMovie(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        fetchAll()
    },[movie_id]);

    const[comment,setComment]=useState("");
    const[comments,setComments]=useState([]);

    const onClickHandler= (e)=>{
        setComments((comments)=> [...comments,comment]);
    }

    const onChangeHandler= (e)=>{
        setComment(e.target.value);
    }
    return(
        <div className="single">
            <div className="content">
                <img src={movie?.img}/>
            <div className="edit">
                <Link to={`/edit`}>
                <img src={Edit} alt=""/>
                </Link>
                <img src={Delete} alt=""/>
            </div>
            <h1>{movie.name}</h1>
            <p>{movie.summary}</p>
            </div>
            <div className="yorum">
                <div className="commentbox">
                    <h3 className="commenttext">Comment</h3>
                    <textarea value={comment} onChange={onChangeHandler} className="inputbox"/>
                    <button onClick={onClickHandler} className="commentbutton">Submit</button>
                </div>
                {comments.map((text)=>(
                    <div className="comment-container">{text}</div>
                ))}

            </div>
        </div>
    )
}

export default Single