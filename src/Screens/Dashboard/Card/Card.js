import "../../../App.css"
import "./Card.css"
export default function Card(props){
   var img = require("../../../assets/img"+props.id+".png");
    return(
  <div className="card">
  <img src={img} alt="api-img" className="card-img"></img>
  <p className="primary-text">{props.primarytext}</p>
  <p className="secondary-text">{props.secondarytext}</p>
  </div>
    );
}