import "../../App.css";
import "./Dashboard.css";
import Banner from "./Banner";
import axios from "axios";
import Card from "../../components/Card/Card";

import React, {useState, useEffect} from "react";
function Dashboard() {
  const[cards,setCards] = useState([])
  useEffect(()=>{
    const fetchData = async () =>{
     const data = await axios.get("https://authjwtexpress.herokuapp.com/apis/fetchAll",{});
      console.log(data.data)
      setCards(data.data);
    }
    fetchData();
  })


  return (
    <>
      <div className="dashboard">
        <Banner />
        <p>All APIs</p>
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

export default Dashboard;
