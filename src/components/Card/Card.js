import "../../App.css"
import "./Card.css"
import React from "react";
import copy from "copy-to-clipboard";  
export default function Card(props){
  const copyText= props.apiEndPoint;
  const copyToClipboard = () => {
    copy(copyText);
    alert(`Copied Api Url "${copyText}"`);
 }
    return(
  <div className="card">
  <img src={props.imageUrl} alt="api-img" className="card-img"></img>
  <p className="primary-text">{props.primarytext}</p>
  <p className="secondary-text">{props.secondarytext}</p>
  <p className="author">Author: {props.author}</p>
  <button className="copy-api btn-2" onClick={copyToClipboard}>Copy API URL</button>
  </div>
    );
}