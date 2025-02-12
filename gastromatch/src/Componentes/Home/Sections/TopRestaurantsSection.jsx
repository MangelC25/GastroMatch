import CardsTopRestaurants from "../Subcomponentes/CardsTopRestaurants";

export default function TopRestaurantsSection() {
  const topRestaurants = [
    { title: "Restaurant 1", description: "Address 1", rating: 4.5 },
    { title: "Restaurant 2", description: "Address 2", rating: 4.5 },
    { title: "Restaurant 3", description: "Address 3", rating: 4.5 },
  ];

  return (
    <section className="top-restaurants-section">
      <div className="container">
        <div className="section-title">
          <h2>✨ Restaurantes Destacados ✨</h2>
          <p>
            ¿Buscas una experiencia gastronómica inigualable? Explora los
            restaurantes mejor valorados por nuestros usuarios y disfruta de
            platos exquisitos en los mejores lugares de la ciudad. ¡Elige,
            reserva y disfruta! 🍷🥩
          </p>
        </div>
        <div className="top-restaurants">
          {topRestaurants.map((restaurant, index) => (
            <CardsTopRestaurants
              key={index}
              title={restaurant.title}
              description={restaurant.description}
              rating={restaurant.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
