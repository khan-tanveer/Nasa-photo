import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./SearchPage.css";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const SearchPage = (props) => {
  // console.log("search", props.location.data);
  // console.log("search", props.location.query);
  // const collection = props.location.query;
  // console.log("search collection", collection);

  let history = useHistory();
  const classes = useStyles();

  const [data, setData] = useState([]);

  const datas = JSON.parse(window.localStorage.getItem("myData"));
  console.log("masla", datas);

  useEffect(() => {
    setData(datas);
    console.log("search", data);
  }, []);

  return (
    <div className="search__container">
      {/* <button onClick={() => history.push("/")} style={{ margin: "1rem" }}>
        Home
      </button> */}

      {data.map((dat) => (
        <>
          <button onClick={() => history.push("/")} style={{ margin: "1rem" }}>
            Home
          </button>
          <h1 style={{ textAlign: "center" }}>NASA Media Search{data}</h1>
          <h4 style={{ marginLeft: "1rem" }}>Search Results for</h4>
          <div className="search__cardContainer">
            <div className="search__card">
              <div className="search__image">
                <img
                  src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
                  alt=""
                />
              </div>
              <div className="search__text">
                <h3>Image Title</h3>
                <h5>Date created</h5>
              </div>
            </div>
          </div>
          <div className={classes.root}>
            <Pagination count={10} color="primary" />
          </div>
        </>
      ))}

      {/* <h1 style={{ textAlign: "center" }}>NASA Media Search</h1>
      <h4 style={{ marginLeft: "1rem" }}>Search Results for </h4>
      <div className="search__cardContainer">
        <div className="search__card">
          <div className="search__image">
            <img
              src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
              alt=""
            />
          </div>
          <div className="search__text">
            <h3>Image Title</h3>
            <h5>Date created</h5>
          </div>
        </div>
      </div>
      <div className={classes.root}>
        <Pagination count={10} color="primary" />
      </div> */}
    </div>
  );
};

export default SearchPage;
