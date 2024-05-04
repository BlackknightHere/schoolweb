import React from "react";
import CardsContainer from "../components/CardsContainer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <header>
          <div className="title">STUDENT MANAGE</div>
          {/* <button className="Newbutton">
            <Link className="addbutton" to="/createstudent">
              Add +
            </Link>
          </button> */}
        </header>
        <div className="content">
          <CardsContainer />
          <div className="Newbutton">
            <Link className="addbutton" to="/createstudent">
              Add +
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
