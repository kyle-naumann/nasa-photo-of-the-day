import React from "react"


function Photo(props) {
    return(
        <>
        <div class = 'Photo'>
            <h2>{props.data.title}</h2>
            <img src = {props.data.url} alt={props.data.title}/>
        </div>
        <div className = "text">
            <p> {props.data.explanation} </p>
        </div>
        </>
    );
    }

export default Photo;