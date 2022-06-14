import "./Dashboard.css"
import copy from "copy-to-clipboard";  
import img1 from "../../assets/img1.png"
export default function Banner(){
    const copyText= "https://api.remove.bg/v1.0/removebg";
    const copyToClipboard = () => {
      copy(copyText);
      alert(`Copied Api Url "${copyText}"`);
   }
    return(
        
        <div className="banner">
            <img alt="img-1" src={img1} className="img-1"></img>
            <div className="semi-circle"></div>
            <div className="api-ad">
            <div className="api-ad-col">
            <div className="api-ad-txt">BACKGROUND IMAGE REMOVE</div>
            <div className="api-ad-info-txt">100% automatic and free</div>
            </div>
            <button className="view-app" onClick={copyToClipboard}>Copy API</button>
            </div>
           
        </div>
    );
}