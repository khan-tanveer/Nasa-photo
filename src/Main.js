import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./HomePage";

const Main = () => {
  const [nasaDatas, setNasaDatas] = useState([]);

  const API_KEY = "sOlxkXa0DKCbQ7LRdzsczF2ngL6HdYt1bFUQP6pc";

  const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await fetch(URL);
    const data = await result.json();
    setNasaDatas([data]);
  };

  return (
    <div className="App">
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
