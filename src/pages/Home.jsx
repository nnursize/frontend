import React from "react"
import { Link } from "react-router-dom"

const Home=()=>{

    const movies=[

        {
            id:1,
            title:"her",
            desc:"her escaping fromfjıee",
            img:"https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id:2,
            title:"star wars",
            desc:"jedi fighting fromfjıee",
            img:"https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id:3,
            title:"hobbit",
            desc:"hobbit kiiling sauron fromfjıee",
            img:"https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    ];

    return(
        <div className="home">
            <div className="movies">
                {movies.map(movie=>(

                    <div className="movie" key={movie.id}>
                        <div className="img">
                            <img src={movie.img} alt=""/>
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${movie.id}`}>
                                <h1>{movie.title}</h1>
                            </Link>
                            <p>{movie.desc}</p>
                            <button>Examine Movie</button>
                        </div>
                    </div>
                )
                    
                    )}
            </div>
        </div>
    )
}

export default Home