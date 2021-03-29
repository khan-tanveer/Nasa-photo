import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./SearchPage.css";
import ReactPaginate from "react-paginate";
// import { makeStyles } from "@material-ui/core/styles";
// import Pagination from "@material-ui/lab/Pagination";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

const SearchPage = (props) => {
  let history = useHistory();
  // const classes = useStyles();

  const [data, setData] = useState([]);

  //paginate

  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 3;
  const pagesVisited = pageNumber * userPerPage;
  //
  const displayUsers = data
    .slice(pagesVisited, pagesVisited + userPerPage)
    .map((dat) => {
      return (
        <>
          <div className="search__cardContainer">
            <div className="search__card">
              <div className="search__image">
                <img
                  className="search__img"
                  src={dat.links?.[0].href}
                  // src="https://images-assets.nasa.gov/image/PIA06577/PIA06577~thumb.jpg"
                  // src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
                  alt=""
                  // alt={dat[0]?.links?.render}
                />
              </div>
              <div className="search__text">
                <h3>{dat?.data[0]?.title}</h3>
                <h5>{dat?.data[0]?.date_created}</h5>
              </div>
            </div>
          </div>
        </>
      );
    });

  const pageCount = Math.ceil(data.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    let datas = localStorage.getItem("myData");
    let newData = JSON.parse(datas);
    setData(newData);
  }, []);

  console.log(data);

  return (
    <div className="search__container">
      <button onClick={() => history.push("/")} style={{ margin: "1rem" }}>
        Home
      </button>
      <h1 style={{ textAlign: "center" }}>NASA Media Search</h1>
      <h4 style={{ marginLeft: "1rem" }}>Search Results for</h4>
      {/* {data.map((dat) => {
        console.log(dat.links?.[0].href);
        return (
          <>
            <div className="search__cardContainer">
              <div className="search__card">
                <div className="search__image">
                  <img
                    className="search__img"
                    src={dat?.links?.[0].href}
                    // src="https://images-assets.nasa.gov/image/PIA06577/PIA06577~thumb.jpg"
                    // src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
                    alt=""
                    // alt={dat[0]?.links?.render}
                  />
                </div>
                <div className="search__text">
                  <h3>{dat?.data[0]?.title}</h3>
                  <h5>{dat?.data[0]?.date_created}</h5>
                </div>
              </div>
            </div>
          </>
        );
      })} */}

      {displayUsers}

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      {/* <br />
      <br />
      <br /> */}

      <h1>Related searches</h1>

      {/* <div className={classes.root}>
        <Pagination count={10} color="primary" />
      </div> */}
    </div>
  );
};

export default SearchPage;
