import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./HomePage";

const Main = () => {
  const [nasaDatas, setNasaDatas] = useState([]);

  const API_KEY = "sOlxkXa0DKCbQ7LRdzsczF2ngL6HdYt1bFUQP6pc";

  const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  useEffect(() => {
    // getSearchData();
    getData();
    // getSearchData();
  }, []);

  const getData = async () => {
    const result = await fetch(URL);
    const data = await result.json();
    // console.log(data);
    setNasaDatas([data]);
  };
  // getData();

  // useEffect(() => {}, []);

  // const getSearchData = async () => {
  //   const results = await fetch(
  //     "https://images-api.nasa.gov/search?q=apollo%2011..."
  //   );
  //   console.log(results);
  //   const datas = await results.json();
  //   console.log(datas.collection.items);
  // };
  return (
    <div className="App">
      {/* <input type="text" placeholder="enter the query" />
      <button>Search</button> */}
      {nasaDatas.map(({ title, url, explanation, date, copyright }) => {
        return (
          <HomePage
            title={title}
            url={url}
            explanation={explanation}
            date={date}
            copyright={copyright}
          />
        );
      })}
    </div>
  );
};

export default Main;
