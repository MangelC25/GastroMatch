import { useState } from 'react';

export default function CardsTopRestaurants( {title, description, rating} ) {
  
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };
  
  return (
    <div className="top-restaurant" onClick={handleFlip}>
      <div className={`card ${flipped ? "flipped" : ""}`}>
        <div className="card-inner">
          {/* Cara Frontal */}
          <div className="card-front">
            <img src="images/restaurant-1.jpg" alt={title} loading="lazy" />
            <div className="restaurant-info">
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Rating: {rating}</p>
            </div>
            <button className="btn">Ver Menu</button>
          </div>
          {/* Cara Trasera */}
          <div className="card-back">
            <h3>{title}</h3>
            <p>Descubre platos exclusivos y reserva ahora para una experiencia única.</p>
            <button className="btn">Reservar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
