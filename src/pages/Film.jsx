import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import Star from "../img/star-icon.png"
import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authContext"

const Film=()=>{

    const state=useLocation().state;
    const navigate=useNavigate();
    const [comment,setComment]=useState(state?.comment||"");
    const [score,setRate]=useState(state?.score||"");
    const [movie_score,setMovieRate]=useState(state?.movie_score||"");
    const[comments,setComments]=useState([]);
    const[actors,setActor]=useState([]);
    const[directors,setDirector]=useState([]);
    const [movie, setMovie]= useState({});
    const location=useLocation();
    const movie_id=location.pathname.split("/")[2]
    const {currentUser}=useContext(AuthContext);

    useEffect(()=>{
        const fetchAll = async() =>{
            try {
                const res= await axios.get(`/movies/${movie_id}`)
                setMovie(res.data);
                const res2= await axios.get(`/comments/${movie_id}`)
                setComments(res2.data);
                const res3= await axios.get(`/rate/${movie_id}`)
                setMovieRate(res3.data.movies_rate);
                const res4= await axios.get(`/actors/${movie_id}`)
                console.log(res4.data)
                setActor(res4.data);
                const res5= await axios.get(`/directors/${movie_id}`)
                console.log(res5.data)
                setDirector(res5.data);

            } catch (err) {
                console.log(err)
            }
        };
        fetchAll()
    },[movie_id]);

    const [selectedScore, setSelectedScore] = useState('');

    const handleScoreChange = async e => {
        e.preventDefault();
        setSelectedScore(e.target.value);
        var num=parseInt(e.target.value)
        try {
            await axios.post(`/rate/`, {
                movieid:movie_id,
                username:currentUser?.username,
                score:num,
            })
            const res2= await axios.get(`/rate/${movie_id}`)
            setMovieRate(res2.data.movies_rate);
        } catch (err) {
            console.log(err);
        }
    };

    const onClickHandler= async e=>{

        e.preventDefault();

        try {
            await axios.post(`/comments/`, {
                movieid:movie_id,
                username:currentUser?.username,
                content:comment,
            })
            const res2= await axios.get(`/comments/${movie_id}`)
            setComments(res2.data);
        } catch (err) {
            console.log(err);
        }
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
        <div className="film">
            <div className="content">
                <div className="verticals1">
                    <img src={`../upload/${movie?.img}`} alt=""/>
                    {str1 === str2 && (
                        <div className="edit">
                            <Link to={`/edit?edit=2`} state={movie}>
                            <img src={Edit} alt=""/>
                            </Link>
                            <img onClick={handleDelete} src={Delete} alt=""/>
                        </div>
                    )}
                <h1>Duration: {movie?.duration}</h1>
                <h2>Release Year: {movie?.year}</h2>
                </div>
                <div className="verticals2">
                    <h3>{movie?.name}</h3>
                    <p>{movie?.summary}</p>
                </div>
            </div>

            <div className="showInfo">
                {directors.map((dir)=>(
                    <div className="directorInfos"> Director: {dir.director_name}, {dir.nationality}</div>
                ))}
            </div>

            <div className="showInfo">
                {actors.map((act)=>(
                    <div className="actorInfos"> Actor: {act.actor_name}, {act.years_of_experience} </div>
                ))}
            </div>

            <div className="degerlendirme">
            <div className="yorum">
                <div className="commentbox">
                    <h3 className="commenttext">Comment</h3>
                    <textarea value={comment}  onChange={e=>setComment(e.target.value)} className="inputbox"/>
                    <button onClick={onClickHandler}  className="commentbutton">Submit</button>
                </div>
                {comments.map((com)=>(
                    <div className="comment-container"> {com.username} : {com.content}</div>
                ))}

            </div>

            <div className="ranking">
                <div className="ranking-row1">       
                    <h3>Rate</h3>
                    <label>
                        <input type="radio" name="option" value="1" checked={selectedScore === '1'} onChange={handleScoreChange} />
                    1</label>
                    <label>
                        <input type="radio" name="option" value="2" checked={selectedScore === '2'} onChange={handleScoreChange} />
                    2</label>
                    <label>
                        <input type="radio" name="option" value="3" checked={selectedScore === '3'} onChange={handleScoreChange} />
                    3</label>
                    <label>
                        <input type="radio" name="option" value="4" checked={selectedScore === '4'} onChange={handleScoreChange} />
                    4</label>
                    <label>
                    <input type="radio" name="option" value="5" checked={selectedScore === '5'} onChange={handleScoreChange} />
                    5</label>
                </div>
                <div className="ranking-row2">       
                    <label>
                        <input type="radio" name="option" value="6" checked={selectedScore === '6'} onChange={handleScoreChange} />
                    6</label>
                    <label>
                        <input type="radio" name="option" value="7" checked={selectedScore === '7'} onChange={handleScoreChange} />
                    7</label>
                    <label>
                        <input type="radio" name="option" value="8" checked={selectedScore === '8'} onChange={handleScoreChange} />
                    8</label>
                    <label>
                        <input type="radio" name="option" value="9" checked={selectedScore === '9'} onChange={handleScoreChange} />
                    9</label>
                    <label>
                        <input type="radio" name="option" value="10" checked={selectedScore === '10'} onChange={handleScoreChange} />
                    10</label>
                </div>
                {selectedScore && <p>Given Score: {selectedScore}</p>}
                <img className="star-icon" src={Star} alt=""/>
                <p className="average-score">{movie_score}/10</p>  
            </div> 
            </div>
        </div>
    )
}

export default Film