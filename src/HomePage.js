import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = ({ title, url, explanation, date, copyright }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   getSearchData();
  // }, []);

  const getSearchData = async () => {
    const results = await fetch(
      `https://images-api.nasa.gov/search?q=${query}`
    );
    // console.log(results);
    const datas = await results.json();
    console.log("main", datas.collection);

    setData(
      window.localStorage.setItem(
        "myData",
        JSON.stringify(datas.collection.items)
      )
    );
    console.log(setData);
    // setData(datas);
    setQuery("");
    console.log("home", setData);
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   getSearchData();
  // };

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
                data: data,
                query: query,
              }}
              // onClick={() => getSearchData()}
            >
              <button type="submit" onClick={() => getSearchData()}>
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
