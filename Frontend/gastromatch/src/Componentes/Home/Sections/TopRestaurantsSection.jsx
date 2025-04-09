import CardsTopRestaurants from "../Subcomponentes/CardsTopRestaurants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TopRestaurantsSection() {
  const topRestaurants = [
    { title: "Restaurant 1", description: "Address 1", rating: 4.5 },
    { title: "Restaurant 2", description: "Address 2", rating: 4.5 },
    { title: "Restaurant 3", description: "Address 3", rating: 4.5 },
    { title: "Restaurant 4", description: "Address 1", rating: 4.5 },
    { title: "Restaurant 5", description: "Address 2", rating: 4.5 },
    { title: "Restaurant 6", description: "Address 3", rating: 4.5 },
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
          <Swiper
            className="mySwiper"
            lazy={"true"}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {topRestaurants.map((restaurant, index) => (
              <SwiperSlide key={index}>
                <CardsTopRestaurants
                  title={restaurant.title}
                  description={restaurant.description}
                  rating={restaurant.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
