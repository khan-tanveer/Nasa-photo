import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./SearchPage.css";
import ReactPaginate from "react-paginate";

const SearchPage = (props) => {
  let history = useHistory();

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
                  // alt=""
                  alt={dat.links?.[0].render}
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

  return (
    <div className="search__container">
      <button onClick={() => history.push("/")} style={{ margin: "1rem" }}>
        Home
      </button>
      <h1 style={{ textAlign: "center" }}>NASA Media Search</h1>
      <h4 style={{ marginLeft: "1rem" }}>
        Search Results for {props.location.query}
      </h4>

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
    </div>
  );
};

export default SearchPage;
