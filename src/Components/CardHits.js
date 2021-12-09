import React from "react";
import '../App.css';
import '../responsive.css';

const CardHits = props => {
  // const [show, setShow] = useState(false);

  // const giveLike = () => {
  //   if (show) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  // }

  const dateHit = (date) => {
    const newDate = new Date(date).toLocaleTimeString('en-US', { hour: '2-digit' });
    return newDate.split(" ", 1);
  }

  // useEffect(() => {
  //   giveLike();
  // }, )

  return (
    <>
      <div key={props.hits.objectID} className="col">
        {(props.hits.story_title === "") ? "" :
          <div className="card h-100">
            <div className="card-body">
              <a href={props.hits.story_url} target="_blank" rel="noreferrer">
                <div>
                  <p className="card-text">
                    <small className="text-muted"><i className="far fa-clock"></i> {dateHit(props.hits.created_at)} hours by {props.hits.author}</small>
                  </p>
                  <h5 className="card-title">{props.hits.story_title}</h5>
                </div>
              </a>
            </div>
            <div className="container-like h-100">
              <i className="far fa-heart"></i>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default CardHits;
