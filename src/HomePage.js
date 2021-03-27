import React from "react";
// import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = ({ title, url, explanation, date, copyright }) => {
  return (
    <div className="home__container">
      {/* header */}
      <h2 className="home__header">NASA Media Search</h2>
      <div className="home__menubar">
        <h3 className="home__left">{title}</h3>
        <div className="home__right">
          <input />
          <button>
            {/* <Link to="/searchpage">Search</Link> */}
            search
          </button>
        </div>
      </div>
      {/* image */}
      <div className="home__image">
        <img className="home__realImage" src={url} alt="" />
      </div>
      {/* text */}
      <div className="home__main">
        <p style={{ textAlign: "center" }}> {explanation}</p>
        <h3 style={{ textAlign: "center" }}>{date}</h3>
        <p style={{ textAlign: "center" }}>
          &copy; Image copyright {copyright}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
