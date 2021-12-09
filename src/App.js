import React, {useState, useEffect} from "react";
import Navbar from "./Components/Navbar";
import SelectNews from "./Components/SelectNews";
import CardHits from "./Components/CardHits";
import Hitsfavorites from "./Components/Hitsfavorites";
import ReactPaginate from 'react-paginate';
import './App.css';

function App() {
  const [hits, setHits] = useState([]);
  const [page, setPage] = useState(0);

  // Status to show and hide content of all hits and favorite hits
  const [show, setShow] = useState(false);

  // let like = localStorage.setItem('like', false);

  let initialURL = `https://hn.algolia.com/api/v1/search_by_date?query=angular&page=${page}`;

  useEffect(() => {
    const getAllHits = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setHits(data.hits);
        setPage(data.page);
      } catch (error) {
        console.log(error)
      }
    };

    getAllHits(initialURL);
  }, );

  const fetchHits = async (currentPage) => {
    try {
      const response = await fetch(currentPage);
      const data = await response.json();
      setHits(data.hits);
      setPage(data.page);
    } catch (error) {
      console.log(error)
    }
  };

  // Click page
  const handlePageClick = async (data) => {
    const currentPage = data.selected;
    initialURL = `https://hn.algolia.com/api/v1/search_by_date?query=angular&page=${currentPage}`;
    // fetch(initialURL)
    // .then((response) => response.json())
    // .then((data) => {
    //   setHits(data.hits);
    //   setPage(data.page);
    // })
    // .catch((error) => console.log(error));
    await fetchHits(initialURL);
  }

  const showAllHits = () =>
    hits.map((hits) => (
      <CardHits hits={hits} key={hits.objectID}/>
    ))

  return (
    <>
      <Navbar brand="HACKER NEWS" />
      <div className='container-buttons'>
        <button
          className={show ? "btn-hits-all" : "btn-hits-favorite" }
          onClick = {() => setShow(false) }
        >
          All
        </button>
        <button
          className={show ? "btn-hits-favorite" : "btn-hits-all" }
          onClick = {() => setShow(true) }
        >
          My faves
        </button>
      </div>
      {!show && <SelectNews />}
      <div className="container">
        <div className="row  row-cols-1 row-cols-md-2">
          {!show && showAllHits()}
        </div>
      </div>
      {show && <Hitsfavorites />}
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        pageCount={49}
        marginPagesDisplayed={0}
        pageRangeDisplayed={9}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </>
  );
}

export default App;
