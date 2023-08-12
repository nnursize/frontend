import React, { useState } from "react";
import poster from '../img/Oppenheimer_(film)_afiş.jpg';
import star_icon from '../img/star-icon.png';
import { Link } from "react-router-dom"
import "../App.css"


export const FilmDetails = () => {

    const [selectedScore, setSelectedScore] = useState('');

    const handleScoreChange = (event) => {
        setSelectedScore(event.target.value);
    };

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

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
    
    return (
        <div className="film-details-panel">
            <h1 className="film-details-h1">Film Detayları</h1>

                <h1 className="film-name">Oppenheimer</h1>
                <img className="film-poster" src={poster} alt={"poster"}/>

                <div className="film-details"> 
                    <p className="release-date">2023</p>
                    <p className="genre">Dram/Gerilim</p>
                    <p className="film-time">180 dk.</p>
                </div>

                <p className="film-cast">Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich, Scott Grimes, Jason Clarke</p>
            
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

                <div className="admin-control-buttons">
                    <button className="delete">Filmi Sil</button>
                <Link to="/edit">
                    <button className="update">Film Bilgilerini Güncelle</button>
                </Link>
                </div>        

        </div>
    )
}

export default FilmDetails;