import React, {useState, useEffect} from "react";
import Navbar from "./Components/Navbar";
import SelectNews from "./Components/SelectNews";
import CardHits from "./Components/CardHits";
import Hitsfavorites from "./Components/Hitsfavorites";
import './App.css';

function App() {
  const [hits, setHits] = useState([]);

  // let like = localStorage.setItem('like', false);

  const initialURL = "https://hn.algolia.com/api/v1/search_by_date";

  const getAllHits = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setHits(data.hits, localStorage.setItem('like', false)))
      .catch((error) => console.log(error));
  };

  const showAllHits = () =>
    hits.map((hits) => (
      <CardHits hits={hits} key={hits.objectID}/>
    ))

  useEffect(() => {
    getAllHits(initialURL);
  }, );

  // Status to show and hide content of all hits and favorite hits
  const [show, setShow] = useState(false);

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
      <SelectNews />
      {!show && showAllHits()}
      {show && <Hitsfavorites />}
    </>
  );
}

export default App;
