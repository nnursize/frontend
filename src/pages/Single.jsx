import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authContext"

const Single=()=>{

    const [movie, setMovie]= useState({});
    const location=useLocation();
    const navigate=useNavigate();
    const movie_id=location.pathname.split("/")[2]
    const {currentUser}=useContext(AuthContext);

    useEffect(()=>{
        const fetchAll = async() =>{
            try {
                const res= await axios.get(`/movies/${movie_id}`)
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

    const handleDelete = async() =>{
        try {
            await axios.delete(`/movies/${movie_id}`)
            navigate("/");
        } catch (err) {
            console.log(err)
        }
    };
    const str1=JSON.stringify(currentUser?.role);
    const str2=JSON.stringify("admin");         //role adminse edit ve delete yapabilsin
    return(
        <div className="single">
            <div className="content">
                <img src={`../upload/${movie?.img}`} alt=""/>
            {str1 === str2 && (
                <div className="edit">
                    <Link to={`/edit?edit=2`} state={movie}>
                    <img src={Edit} alt=""/>
                    </Link>
                    <img onClick={handleDelete} src={Delete} alt=""/>
                </div>
            )}
            <h1>{movie?.duration}</h1>
            <h2>{movie?.year}</h2>
            <h3>{movie?.name}</h3>
            <p>{movie?.summary}</p>
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