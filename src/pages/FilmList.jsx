import React, { useEffect, useState, useContext } from "react"
import axios from "axios"
import "../App.css"
import { Link, useLocation } from "react-router-dom"
import { AuthContext } from "../context/authContext";

const FilmList=()=>{
    
    const [movies, setMovies]= useState([]);
    const genre=useLocation().search

    useEffect(()=>{
        const fetchAll = async() =>{
            try {
                const res= await axios.get(`/movies${genre}`)
                setMovies(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        fetchAll()
    },[genre]);

    const {currentUser,logout}=useContext(AuthContext);  //user bilgisi
    const str1=JSON.stringify(currentUser?.role);
    const str2=JSON.stringify("admin");         //role adminse edit ve delete yapabilsin

    return(
        <div className="film-list">

            <h1 className="film-list-h1">Filmler</h1>
                                
            {str1 === str2 && (
                <Link className="link" to={`/add-film`}>
                    <button className="add-film-list">Film Ekle</button>
                </Link>
            )}


            <div className="movies">
                {movies.map((movie)=>(

                    <div className="movie" key={movie.id}>
                        <div className="img">
                            <img className="film-poster-list" src={`../upload/${movie?.img}`} alt=""/>
                        </div>
                        <div className="content-list">
                            <Link className="link" to={`/movie/${movie.id}`}>
                                <h1 className="movie-title-list">{movie?.name}</h1>
                            </Link>
                            <p className='movie-description-list'>{movie?.summary}</p>

                            <Link className="link" to={`/movie/${movie.id}`}>
                            <button className="see-details">Detayları Gör</button>
                            </Link>

                            <div className="delete-update-home admin-control">
                            <Link to="/edit">
                                <button className="update">Film Bilgilerini Güncelle</button>
                            </Link>
                            <Link to="/edit">
                            <button className="delete">Sil</button>
                            </Link>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default FilmList