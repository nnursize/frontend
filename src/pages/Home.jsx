import React, { useEffect, useState } from "react"
import axios from "axios"

import { Link, useLocation } from "react-router-dom"

const Home=()=>{
    
    const [movies, setMovies]= useState([]);
    const genre=useLocation().search

    useEffect(()=>{
        const fetchAll = async() =>{
            try {
                const res= await axios.get(`/movies${genre}`)
                console.log(res.data.genre)
                setMovies(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        fetchAll()
    },[genre]);

    return(
        <div className="home">
            <div className="movies">
                {movies.map((movie)=>(

                    <div className="movie" key={movie.id}>
                        <div className="img">
                            <img src={movie.img} alt=""/>
                        </div>
                        <div className="content">
                            <Link className="link" to={`/movie/${movie.id}`}>
                                <h1>{movie.name}</h1>
                            </Link>
                            <p>{movie.summary}</p>
                            <Link className="link" to={`/movie/${movie.id}`}>
                            <button>Examine Movie</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Home