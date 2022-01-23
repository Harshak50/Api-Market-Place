import "./Dashboard.css"
import img1 from "../../assets/img1.png"
export default function Banner(){
    return(
        <div className="banner">
            <img alt="img-1" src={img1} className="img-1"></img>
            <div className="semi-circle"></div>
            <div className="api-ad">
            <div className="api-ad-col">
            <div className="api-ad-txt">BACKGROUND IMAGE REMOVE</div>
            <div className="api-ad-info-txt">100% automatic and free</div>
            </div>
            <button className="view-app">View App</button>
            </div>
           
        </div>
    );
}