import "../../App.css";
import "./Dashboard.css";
import logo from "../../assets/cuvette.svg";
import Banner from "./Banner";
import Card from "./Card/Card";
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
      <div className="nav-bar">
        <img alt="logo" src={logo} className="img"></img>
        <button className="btn-1 btn">Login / Signup</button>
      </div>
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
