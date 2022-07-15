import React from "react";

export default function Card(props) {
    const present=false;
    return (
        <div className="card">
            <div className="card__body">
            <img src={props.photo} class="card__image" />
            </div>
            <div className="card__details">
                {props.superHost?<div className="card__host">SuperHost </div>:null}
                <div className="card__title">{props.type}{props.beds!=null?`.${props.beds} beds `:null}</div>
                <div>{` ⭐${props.rating}`}</div>
            </div>
            <p className="card__description">{props.title}</p>
        </div>
    );
}
