import React from "react"
import { Link } from "react-router-dom"
import "../App.css"

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
            <button className="add-new-film admin-control">Ekle</button>
            <div className="movies">
                {movies.map(movie=>(

                    <div className="movie" key={movie.id}>
                        <div className="img">
                            <img src={movie.img} alt=""/>
                        </div>
                        <div className="content">
                            <h1>{movie.title}</h1>
                            <p>{movie.desc}</p>

                            <Link className="link" to={`/post/${movie.id}`}>
                            <button className="see-details">Detayları gör</button>
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
                )
                    
                    )}
            </div>
        </div>
    )
}

export default Home