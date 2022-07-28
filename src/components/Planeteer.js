import React from "react";

function Planeteer({ planeteer }) {

  const [isBio, setIsBio] = useState(true)
  function handleClick() {
    setIsBio(!isBio)
  }


  return (
    <li className="cards__item">
      <div className="card">
        <img onClick={handleClick}
          src={planeteer.pictureUrl}
          alt={planeteer.name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">{isBio ? planeteer.bio : planeteer.quote}</p>
          <div className="card__detail">
            <p>{planeteer.twitter}</p>
            <p>
              {
                planeteer.fromUSA ? "USA-based" : "Working overseas"
              }
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
