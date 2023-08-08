import React from "react"
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from "react-router-dom"
import { useState } from "react"

const Single=()=>{
    const[comment,setComment]=useState("");
    const[comments,setComments]=useState([]);

    const onClickHandler= (e)=>{
        setComments((comments)=> [...comments,comment]);
    }

    const onChangeHandler= (e)=>{
        setComment(e.target.value);
    }
    return(
        <div className="single">
            <div className="content">
                <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
            <div className="edit">
                <Link to={`/edit`}>
                <img src={Edit} alt=""/>
                </Link>
                <img src={Delete} alt=""/>
            </div>
            <h1>her</h1>
            <p>her escaping fromfjıee</p>
            </div>
            <div className="yorum">
                <div className="commentbox">
                    <h3 className="commenttext">Comment</h3>
                    <textarea value={comment} onChange={onChangeHandler} className="inputbox"/>
                    <button onClick={onClickHandler} className="commentbutton">Submit</button>
                </div>
                {comments.map((text)=>(
                    <div className="comment-container">{text}</div>
                ))}

            </div>
        </div>
    )
}

export default Single