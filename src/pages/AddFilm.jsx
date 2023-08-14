import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "../App.css"

const AddFilm=()=>{

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
        <div className="add-film-data">
            <h1 className="film-details-h1">Film Ekle</h1>
            <div className="update-panel">
                <div className="labels-update-panel">
                    <b className="label-edit">Film Adı: </b>
                    <b className="label-edit">Film Afişi: </b>
                    <b className="label-edit">Çıkış Yılı: </b>
                    <b className="label-edit">Türü: </b>
                    <b className="label-edit">Süresi: </b>
                    <b className="label-edit">Oyuncular: </b>
                </div>
                <div className="input-update-panel">
                    <input type="text" className="input-box" placeholder="Film adı giriniz" onChange={setFilmName} />
                    <input type="file" className="input-box" accept=".jpg, .png" onChange={handleFileChange} />
                    <input type="text" className="input-box" placeholder="Yıl bilgisi giriniz" onChange={setFilmDate} />
                    <input type="text" className="input-box" placeholder="Tür bilgisi giriniz" onChange={setGenre} />
                    <input type="text" className="input-box" placeholder="Süre bilgisi giriniz" onChange={setFilmDuration} />
                    <input type="text" className="input-box" placeholder="Film oyuncularını giriniz" onChange={setFilmCast} />
                </div>
            </div>
            <button>Ekle</button>
        </div>      
    )
}

export default AddFilm