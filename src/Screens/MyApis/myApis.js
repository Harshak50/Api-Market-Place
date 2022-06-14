import "../../App.css";
import "../MyApis/myApis.css"
import axios from "axios";
import Card from "../../components/Card/Card";
import React, {useState, useEffect} from "react";
function MyApis() {
  const[cards,setCards] = useState([])
  useEffect(()=>{
    const fetchData = async () =>{
     const data = await axios.get("https://authjwtexpress.herokuapp.com/apis/myApis/",{params:{"email":"kondapuramharsha@gmail.com"}});
      console.log(data.data)
      setCards(data.data);
    }
    fetchData();
  })
  return (
     <>
     <div  className="nav-bar">
      <p className="main-label">My APIs</p>
      </div>
      <div className="my-apis">
        <div className="cards">
          {cards.map((e) => {
            return (
              <Card
                id={e.id}
                primarytext={e.apiName}
                secondarytext={e.description}
                imageUrl={e.imageUrl}
                author={e.author}
                apiEndPoint={e.apiEndPoint}
              />
            );
          })}
          
        </div>
      </div>
    </>
  );
}

export default MyApis;
