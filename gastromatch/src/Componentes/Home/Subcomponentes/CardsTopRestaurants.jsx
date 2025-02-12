export default function CardsTopRestaurants( {title, description, rating} ) {
  return (
    <div className="top-restaurant">
      <img src="images/restaurant-1.jpg" alt="Restaurant 1" />
      <div className="restaurant-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Rating: {rating}</p>
      </div>
      <button className="btn">View Menu</button>
    </div>
  );
}
