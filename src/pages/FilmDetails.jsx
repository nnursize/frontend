import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authContext"
import "../App.css"
import star_icon from '../img/star-icon.png';

const FilmDetails=()=>{

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
    const [selectedScore, setSelectedScore] = useState('');

    const handleScoreChange = (event) => {
        setSelectedScore(event.target.value);
    };

    const addComment = (comment) => {
        setComments([...comments, comment]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (comment.trim() !== '') {
            addComment(comment);
            setComment('');
        } else {
            alert("Lütfen bir yorum giriniz.");
        }
    };

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
        <div className="film-details-panel">
            <h1 className="film-details-h1">Film Detayları</h1>

                <h1 className="film-name">{movie?.name}</h1>
                <img className="film-poster" src={`../upload/${movie?.img}`} alt={"poster"}/>

                <div className="film-details"> 
                    <p className="release-date">{movie?.year}</p>
                    <p className="genre">{movie?.genre}</p>
                    <p className="film-time">{movie?.duration}</p>
                </div>

                <p className="film-cast">{movie?.cast}</p>
            
                <div className="comments">
                    <div className="commentbox">
                        <h3>Yorum Yap</h3>
                        <form onSubmit={handleSubmit}>
                            <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="type-comment" placeholder="Film hakkındaki görüşlerinizi yazınız." rows="4" cols="50">
                            </textarea>
                            <br/>
                            <button type="submit">Gonder</button>
                        </form>
                    </div>
                    <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment}</li>
                    ))}
                    </ul>
                </div>

                <div className="ranking">
                <div className="ranking-row1">       
                    <h3>Puan Ver</h3>
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
                {selectedScore && <p>Verdiğiniz Puan: {selectedScore}</p>}
                </div>
                
                <img className="star-icon" src={star_icon} alt={"star_icon"}/>
                <p className="average-score">6.7/10</p>   

                {str1 === str2 && (
                <div className="admin-control-buttons">
                    <button className="delete">Filmi Sil</button>
                    <Link to="/edit">
                        <button className="update">Film Bilgilerini Güncelle</button>
                    </Link>
                </div> 
                )}    

        </div>
    )
}

export default FilmDetails