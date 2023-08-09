import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "../App.css"

const Edit=()=>{

    const [name, setName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [date, setDate] = useState('');
    const [genre, setGenre] = useState('');
    const [duration, setDuration] = useState('');
    const [cast, setCast] = useState('');

    const setFilmName = (event) => {
        setName(event.target.value);
    };

    const setFilmDate = (event) => {
        setDate(event.target.value);
    };

    const setFilmGenre = (event) => {
        setGenre(event.target.value);
    };

    const setFilmDuration = (event) => {
        setDuration(event.target.value);
    };

    const setFilmCast = (event) => {
        setCast(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
          setSelectedFile(file);
        } else {
          alert('Lütfen geçerli bir JPG veya PNG dosyası seçin.');
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
          setUploadedFiles([...uploadedFiles, selectedFile]);
          setSelectedFile(null);
        }
    };

    const handleLinkClick = () => {
        window.location.href = 'https://upload.wikimedia.org/wikipedia/tr/7/7f/Oppenheimer_%28film%29_afi%C5%9F.jpg';
      };

    return (
        <div className="update-film-data">
        <div className="update-panel">
            <label className="film-name-update">
                <b>Film Adı: </b>
                <input type="text" className="input-box" placeholder="Film adı giriniz" onChange={setFilmName} />
            </label>

            <label className="film-poster-update">
                <b>Film Afişi: </b>
                <input type="file" accept=".jpg, .png" onChange={handleFileChange} />
                <button className="upload-button" onClick={handleUpload}>Dosya Yükle</button>                
            </label>
            <label className="film-date-update">
                <b>Çıkış Yılı: </b>
                <input type="text" className="input-box" placeholder="Yıl bilgisi giriniz" onChange={setFilmDate} />
            </label> 
            <label className="film-date-update">
                <b>Türü: </b>
                <input type="text" className="input-box" placeholder="Tür bilgisi giriniz" onChange={setFilmGenre} />
            </label> 
            <label className="film-duration-update">
                <b>Süresi: </b>
                <input type="text" className="input-box" placeholder="Süre bilgisi giriniz" onChange={setFilmDuration} />
            </label>
            <label className="film-cast-update">
                <b>Oyuncular: </b>
                <input type="text" className="input-box" placeholder="Film oyuncularını giriniz" onChange={setFilmCast} />
            </label>
        </div>

            <div className="current-film-details">
                Film adı: <input type="text" value={name} readOnly />
                <p/>Film afişi: <span className="poster-link" onClick={handleLinkClick}>Afiş Linki</span>
                <p/>Çıkış yılı: <input type="text" value={date} readOnly />
                <p/>Türü: <input type="text" value={genre} readOnly />
                <p/>Süresi: <input type="text" value={duration} readOnly />
                <p/>Oyuncular: <input type="text" value={cast} readOnly />
            </div>
        </div>        
    )
}

export default Edit