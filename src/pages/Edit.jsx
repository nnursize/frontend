import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Edit=()=>{
    const [value,setValue]=useState("");
    console.log(value);
    return(
        <div className="Edit">
            <div className="content">
                <input type="text" placeholder="Name"/>
                <div className="editorContainer">
                <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish </h1>
                        <span>
                            <b>Status</b> <b>Span</b>
                        </span>
                        <span>
                            <b>Visibility</b>Public
                        </span>            
                        <input style={{display:"none"}} type="file" name="" id="file" /> 
                        <label className="file" htmlFor="file">Upload image</label> 
                        <div className="buttons">
                            <button>Update</button>
                        </div>     
                </div>
                <div className="item">
                    <h1>Genre</h1>
                    <div className="genre">
                     <input type="radio" name="genre" value="art" id="art"/>
                     <label htmlFor="art">Art</label>
                    </div>
                    <div className="genre">
                     <input type="radio" name="genre" value="science" id="science"/>
                     <label htmlFor="science">Science</label>
                    </div>
                    <div className="genre">
                     <input type="radio" name="genre" value="tech" id="tech"/>
                     <label htmlFor="tech">Tech</label>
                    </div>
                    <div className="genre">
                     <input type="radio" name="genre" value="cinema" id="cinema"/>
                     <label htmlFor="cinema">Cinema</label>
                    </div>
                    <div className="genre">
                     <input type="radio" name="genre" value="design" id="design"/>
                     <label htmlFor="design">Design</label>
                    </div>
                    <div className="genre">
                     <input type="radio" name="genre" value="food" id="food"/>
                     <label htmlFor="food">Food</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit