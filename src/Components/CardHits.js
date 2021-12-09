import React, {useState, useEffect} from "react";
import '../App.css';
import '../responsive.css';

const CardHits = props => {
  const [show, setShow] = useState(false);

  const giveLike = () => {
    if (show) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    giveLike();
  }, )

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2">
        <div key={props.hits.objectID} className="col">
          <div className="card h-100">
            <div className="card-body">
              <p className="card-text">
                <small className="text-muted"><i className="far fa-clock"></i> by {props.hits.author}</small>
              </p>
              <h5 className="card-title">{props.hits.story_title}</h5>
            </div>
            <div className="container-like h-100">
              <i className={!show ? "far fa-heart" : "fas fa-heart"} onChange={() => giveLike()}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardHits;
