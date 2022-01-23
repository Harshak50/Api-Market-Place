import "../../App.css";
import "./Dashboard.css";
import Banner from "./Banner";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar"
function Dashboard() {
  var cards = [
    {
      primarytext: "Background Remover",
      secondarytext:
        "The description of the API in quick brief and we wil truncate it here",
      id: "1",
    },
    {
      primarytext: "API Name",
      secondarytext:
        "The description of the API in quick brief and we wil truncate it here",
      id: "2",
    },
    {
      primarytext: "API Name",
      secondarytext:
        "The description of the API in quick brief and we wil truncate it here",
      id: "3",
    },
    {
      primarytext: "API Name",
      secondarytext:
        "The description of the API in quick brief and we wil truncate it here",
      id: "1",
    },
    {
      primarytext: "API Name",
      secondarytext:
        "The description of the API in quick brief and we wil truncate it here",
      id: "2",
    },
    {
      primarytext: "API Name",
      secondarytext:
        "The description of the API in quick brief and we wil truncate it here",
      id: "3",
    },
    {
      primarytext: "API Name",
      secondarytext:
        "The description of the API in quick brief and we wil truncate it here",
      id: "1",
    },
    {
        primarytext: "API Name",
        secondarytext:
          "The description of the API in quick brief and we wil truncate it here",
        id: "2",
      }
  ];
  return (
    <>
    <Navbar/>
      <div className="dashboard">
        <Banner />
        <p>All APIs</p>
        <div className="cards">
          {cards.map((e) => {
            return (
              <Card
                id={e.id}
                primarytext={e.primarytext}
                secondarytext={e.secondarytext}
              />
            );
          })}
          
        </div>
      </div>
    </>
  );
}

export default Dashboard;
