import React, { useState } from 'react';
import { Link } from "react-router-dom"
import "../App.css"

const FilmList=()=>{

    const movies=[

        {
            id:1,
            title:"Galaksinin Koruyucuları 3333333333333333333333333333333333333333333333333333333333333333333333333333",
            desc:"In Marvel Studios \"Guardians of the Galaxy Vol. 3\" our beloved band of misfits are looking a bit different these days. Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
            img:"https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },

        {
            id:2,
            title:"Oppenheimer",
            desc:"Amerikalı fizikçi Julius Robert Oppenheimer'ın hayatına odaklanılan filmde, Julius Robert Oppenheimer’ın, İkinci Dünya Savaşı sırasında atom bombasının geliştirilme sürecindeki rolü gözler önüne seriliyor. Fizikçi Julius Robert Oppenheimer'a 2. Dünya Savaşı sırasında Manhattan Projesi'nin bilimsel liderliği verildiğinde, o ve eşi Kitty, Oppenheimer'ın çalışmasının sadece kendi hayatları üzerinde değil, tüm dünya üzerinde bu kadar etki edeceğini hayal edemezdi. New Mexico'daki Los Alamos Ulusal Laboratuvarında, o ve ekibi, uzun çalışmaların ardından bir nükleer silah geliştirmesinin ardından Oppenheimer \"atom bombasının babası\" ilan edilir. Ancak ölümcül icadının Hiroşima ve Nagazaki'de kullanılacak olması, Oppenheimer'ın kendisini projeden uzaklaştırmasına neden olur. Savaş sona ermek üzereyken, Lewis Strauss'un ortak kurduğu ABD Atom Enerjisi Ajansı'nın danışmanı olan Robert Oppenheimer, nükleer enerjinin uluslararası kontrolüne ve nükleer silahlanma yarışına karşı olduğunu savunur ve bu nedenle ABD tarafından hedef haline gelir.Amerikalı fizikçi Julius Robert Oppenheimer'ın hayatına odaklanılan filmde, Julius Robert Oppenheimer’ın, İkinci Dünya Savaşı sırasında atom bombasının geliştirilme sürecindeki rolü gözler önüne seriliyor. Fizikçi Julius Robert Oppenheimer'a 2. Dünya Savaşı sırasında Manhattan Projesi'nin bilimsel liderliği verildiğinde, o ve eşi Kitty, Oppenheimer'ın çalışmasının sadece kendi hayatları üzerinde değil, tüm dünya üzerinde bu kadar etki edeceğini hayal edemezdi. New Mexico'daki Los Alamos Ulusal Laboratuvarında, o ve ekibi, uzun çalışmaların ardından bir nükleer silah geliştirmesinin ardından Oppenheimer \"atom bombasının babası\" ilan edilir. Ancak ölümcül icadının Hiroşima ve Nagazaki'de kullanılacak olması, Oppenheimer'ın kendisini projeden uzaklaştırmasına neden olur. Savaş sona ermek üzereyken, Lewis Strauss'un ortak kurduğu ABD Atom Enerjisi Ajansı'nın danışmanı olan Robert Oppenheimer, nükleer enerjinin uluslararası kontrolüne ve nükleer silahlanma yarışına karşı olduğunu savunur ve bu nedenle ABD tarafından hedef haline gelir.Amerikalı fizikçi Julius Robert Oppenheimer'ın hayatına odaklanılan filmde, Julius Robert Oppenheimer’ın, İkinci Dünya Savaşı sırasında atom bombasının geliştirilme sürecindeki rolü gözler önüne seriliyor. Fizikçi Julius Robert Oppenheimer'a 2. Dünya Savaşı sırasında Manhattan Projesi'nin bilimsel liderliği verildiğinde, o ve eşi Kitty, Oppenheimer'ın çalışmasının sadece kendi hayatları üzerinde değil, tüm dünya üzerinde bu kadar etki edeceğini hayal edemezdi. New Mexico'daki Los Alamos Ulusal Laboratuvarında, o ve ekibi, uzun çalışmaların ardından bir nükleer silah geliştirmesinin ardından Oppenheimer \"atom bombasının babası\" ilan edilir. Ancak ölümcül icadının Hiroşima ve Nagazaki'de kullanılacak olması, Oppenheimer'ın kendisini projeden uzaklaştırmasına neden olur. Savaş sona ermek üzereyken, Lewis Strauss'un ortak kurduğu ABD Atom Enerjisi Ajansı'nın danışmanı olan Robert Oppenheimer, nükleer enerjinin uluslararası kontrolüne ve nükleer silahlanma yarışına karşı olduğunu savunur ve bu nedenle ABD tarafından hedef haline gelir.Amerikalı fizikçi Julius Robert Oppenheimer'ın hayatına odaklanılan filmde, Julius Robert Oppenheimer’ın, İkinci Dünya Savaşı sırasında atom bombasının geliştirilme sürecindeki rolü gözler önüne seriliyor. Fizikçi Julius Robert Oppenheimer'a 2. Dünya Savaşı sırasında Manhattan Projesi'nin bilimsel liderliği verildiğinde, o ve eşi Kitty, Oppenheimer'ın çalışmasının sadece kendi hayatları üzerinde değil, tüm dünya üzerinde bu kadar etki edeceğini hayal edemezdi. New Mexico'daki Los Alamos Ulusal Laboratuvarında, o ve ekibi, uzun çalışmaların ardından bir nükleer silah geliştirmesinin ardından Oppenheimer \"atom bombasının babası\" ilan edilir. Ancak ölümcül icadının Hiroşima ve Nagazaki'de kullanılacak olması, Oppenheimer'ın kendisini projeden uzaklaştırmasına neden olur. Savaş sona ermek üzereyken, Lewis Strauss'un ortak kurduğu ABD Atom Enerjisi Ajansı'nın danışmanı olan Robert Oppenheimer, nükleer enerjinin uluslararası kontrolüne ve nükleer silahlanma yarışına karşı olduğunu savunur ve bu nedenle ABD tarafından hedef haline gelir.Amerikalı fizikçi Julius Robert Oppenheimer'ın hayatına odaklanılan filmde, Julius Robert Oppenheimer’ın, İkinci Dünya Savaşı sırasında atom bombasının geliştirilme sürecindeki rolü gözler önüne seriliyor. Fizikçi Julius Robert Oppenheimer'a 2. Dünya Savaşı sırasında Manhattan Projesi'nin bilimsel liderliği verildiğinde, o ve eşi Kitty, Oppenheimer'ın çalışmasının sadece kendi hayatları üzerinde değil, tüm dünya üzerinde bu kadar etki edeceğini hayal edemezdi. New Mexico'daki Los Alamos Ulusal Laboratuvarında, o ve ekibi, uzun çalışmaların ardından bir nükleer silah geliştirmesinin ardından Oppenheimer \"atom bombasının babası\" ilan edilir. Ancak ölümcül icadının Hiroşima ve Nagazaki'de kullanılacak olması, Oppenheimer'ın kendisini projeden uzaklaştırmasına neden olur. Savaş sona ermek üzereyken, Lewis Strauss'un ortak kurduğu ABD Atom Enerjisi Ajansı'nın danışmanı olan Robert Oppenheimer, nükleer enerjinin uluslararası kontrolüne ve nükleer silahlanma yarışına karşı olduğunu savunur ve bu nedenle ABD tarafından hedef haline gelir.Amerikalı fizikçi Julius Robert Oppenheimer'ın hayatına odaklanılan filmde, Julius Robert Oppenheimer’ın, İkinci Dünya Savaşı sırasında atom bombasının geliştirilme sürecindeki rolü gözler önüne seriliyor. Fizikçi Julius Robert Oppenheimer'a 2. Dünya Savaşı sırasında Manhattan Projesi'nin bilimsel liderliği verildiğinde, o ve eşi Kitty, Oppenheimer'ın çalışmasının sadece kendi hayatları üzerinde değil, tüm dünya üzerinde bu kadar etki edeceğini hayal edemezdi. New Mexico'daki Los Alamos Ulusal Laboratuvarında, o ve ekibi, uzun çalışmaların ardından bir nükleer silah geliştirmesinin ardından Oppenheimer \"atom bombasının babası\" ilan edilir. Ancak ölümcül icadının Hiroşima ve Nagazaki'de kullanılacak olması, Oppenheimer'ın kendisini projeden uzaklaştırmasına neden olur. Savaş sona ermek üzereyken, Lewis Strauss'un ortak kurduğu ABD Atom Enerjisi Ajansı'nın danışmanı olan Robert Oppenheimer, nükleer enerjinin uluslararası kontrolüne ve nükleer silahlanma yarışına karşı olduğunu savunur ve bu nedenle ABD tarafından hedef haline gelir.Amerikalı fizikçi Julius Robert Oppenheimer'ın hayatına odaklanılan filmde, Julius Robert Oppenheimer’ın, İkinci Dünya Savaşı sırasında atom bombasının geliştirilme sürecindeki rolü gözler önüne seriliyor. Fizikçi Julius Robert Oppenheimer'a 2. Dünya Savaşı sırasında Manhattan Projesi'nin bilimsel liderliği verildiğinde, o ve eşi Kitty, Oppenheimer'ın çalışmasının sadece kendi hayatları üzerinde değil, tüm dünya üzerinde bu kadar etki edeceğini hayal edemezdi. New Mexico'daki Los Alamos Ulusal Laboratuvarında, o ve ekibi, uzun çalışmaların ardından bir nükleer silah geliştirmesinin ardından Oppenheimer \"atom bombasının babası\" ilan edilir. Ancak ölümcül icadının Hiroşima ve Nagazaki'de kullanılacak olması, Oppenheimer'ın kendisini projeden uzaklaştırmasına neden olur. Savaş sona ermek üzereyken, Lewis Strauss'un ortak kurduğu ABD Atom Enerjisi Ajansı'nın danışmanı olan Robert Oppenheimer, nükleer enerjinin uluslararası kontrolüne ve nükleer silahlanma yarışına karşı olduğunu savunur ve bu nedenle ABD tarafından hedef haline gelir.Amerikalı fizikçi Julius Robert Oppenheimer'ın hayatına odaklanılan filmde, Julius Robert Oppenheimer’ın, İkinci Dünya Savaşı sırasında atom bombasının geliştirilme sürecindeki rolü gözler önüne seriliyor. Fizikçi Julius Robert Oppenheimer'a 2. Dünya Savaşı sırasında Manhattan Projesi'nin bilimsel liderliği verildiğinde, o ve eşi Kitty, Oppenheimer'ın çalışmasının sadece kendi hayatları üzerinde değil, tüm dünya üzerinde bu kadar etki edeceğini hayal edemezdi. New Mexico'daki Los Alamos Ulusal Laboratuvarında, o ve ekibi, uzun çalışmaların ardından bir nükleer silah geliştirmesinin ardından Oppenheimer \"atom bombasının babası\" ilan edilir. Ancak ölümcül icadının Hiroşima ve Nagazaki'de kullanılacak olması, Oppenheimer'ın kendisini projeden uzaklaştırmasına neden olur. Savaş sona ermek üzereyken, Lewis Strauss'un ortak kurduğu ABD Atom Enerjisi Ajansı'nın danışmanı olan Robert Oppenheimer, nükleer enerjinin uluslararası kontrolüne ve nükleer silahlanma yarışına karşı olduğunu savunur ve bu nedenle ABD tarafından hedef haline gelir.Amerikalı fizikçi Julius Robert Oppenheimer'ın hayatına odaklanılan filmde, Julius Robert Oppenheimer’ın, İkinci Dünya Savaşı sırasında atom bombasının geliştirilme sürecindeki rolü gözler önüne seriliyor. Fizikçi Julius Robert Oppenheimer'a 2. Dünya Savaşı sırasında Manhattan Projesi'nin bilimsel liderliği verildiğinde, o ve eşi Kitty, Oppenheimer'ın çalışmasının sadece kendi hayatları üzerinde değil, tüm dünya üzerinde bu kadar etki edeceğini hayal edemezdi. New Mexico'daki Los Alamos Ulusal Laboratuvarında, o ve ekibi, uzun çalışmaların ardından bir nükleer silah geliştirmesinin ardından Oppenheimer \"atom bombasının babası\" ilan edilir. Ancak ölümcül icadının Hiroşima ve Nagazaki'de kullanılacak olması, Oppenheimer'ın kendisini projeden uzaklaştırmasına neden olur. Savaş sona ermek üzereyken, Lewis Strauss'un ortak kurduğu ABD Atom Enerjisi Ajansı'nın danışmanı olan Robert Oppenheimer, nükleer enerjinin uluslararası kontrolüne ve nükleer silahlanma yarışına karşı olduğunu savunur ve bu nedenle ABD tarafından hedef haline gelir.Amerikalı fizikçi Julius Robert Oppenheimer'ın hayatına odaklanılan filmde, Julius Robert Oppenheimer’ın, İkinci Dünya Savaşı sırasında atom bombasının geliştirilme sürecindeki rolü gözler önüne seriliyor. Fizikçi Julius Robert Oppenheimer'a 2. Dünya Savaşı sırasında Manhattan Projesi'nin bilimsel liderliği verildiğinde, o ve eşi Kitty, Oppenheimer'ın çalışmasının sadece kendi hayatları üzerinde değil, tüm dünya üzerinde bu kadar etki edeceğini hayal edemezdi. New Mexico'daki Los Alamos Ulusal Laboratuvarında, o ve ekibi, uzun çalışmaların ardından bir nükleer silah geliştirmesinin ardından Oppenheimer \"atom bombasının babası\" ilan edilir. Ancak ölümcül icadının Hiroşima ve Nagazaki'de kullanılacak olması, Oppenheimer'ın kendisini projeden uzaklaştırmasına neden olur. Savaş sona ermek üzereyken, Lewis Strauss'un ortak kurduğu ABD Atom Enerjisi Ajansı'nın danışmanı olan Robert Oppenheimer, nükleer enerjinin uluslararası kontrolüne ve nükleer silahlanma yarışına karşı olduğunu savunur ve bu nedenle ABD tarafından hedef haline gelir.",
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
        <div className="film-list">

                <h1 className="film-list-h1">Filmler</h1>
                <Link className="link" to={`/add-film`}>
                    <button className="add-film-list">Film Ekle</button>
                </Link>

            <div className="movies">
                {movies.map(movie=>(
                    <div className="movie" key={movie.id}>
                        <div>
                            <img className="film-poster-list" src={movie.img} alt=""/>
                        </div>
                        <div className="content-list">
                            <h1 className="movie-title-list">{movie.title}</h1>
                            <p className='movie-description-list'>{movie.desc}</p>
                            
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

export default FilmList