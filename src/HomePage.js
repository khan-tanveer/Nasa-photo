import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = ({ title, url, explanation, date, copyright }) => {
  const [query, setQuery] = useState();
  const [searchData, setSearchData] = useState();

  // useEffect(() => {
  //   getSearchData();
  // }, []);

  const getSearchData = async () => {
    const results = await fetch(
      `https://images-api.nasa.gov/search?q=${query}`
    );
    console.log(results);
    const datas = await results.json();
    console.log(datas.collection);
    setSearchData(datas.collection);
    console.log(setSearchData);
  };

  const handleClick = (e) => {
    e.preventDefault();
    getSearchData();
    setQuery("");
  };

  return (
    <div className="home__container">
      {/* header */}
      <h2 className="home__header">NASA Media Search</h2>
      <div className="home__menubar">
        <h3 className="home__left">{title}</h3>
        <div className="home__right">
          <form>
            <input
              // type="text"
              placeholder="eg. Enter the apollo"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Link
              to={{
                pathname: "/searchpage",
                data: query,
                fetchData: searchData,
              }}
            >
              <button type="submit" onClick={handleClick}>
                Search
              </button>
            </Link>
            {/* search */}
          </form>
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
