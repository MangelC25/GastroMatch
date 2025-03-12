import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css";
import { EffectCards, Autoplay } from "swiper/modules";

const defaultHalfRatingIcon =
  "https://img.icons8.com/fluency/48/star-half-empty.png";

export default function ChefsSection() {
  const chefs = [
    {
      name: "Juan",
      description:
        "Con más de 20 años de experiencia en la cocina, Juan es el maestro de la tradición gastronómica. Su pasión por la cocina clásica se refleja en cada plato, donde combina recetas ancestrales con un toque contemporáneo. Su dedicación y amor por los sabores auténticos hacen de cada experiencia culinaria una celebración de la herencia local. ¡Descubre la magia de la cocina tradicional y déjate sorprender por su inigualable sazón!",
      background: "linear-gradient(to bottom, #ffc95d, #ff6700)",
      image: "./../../../../src/assets/img/Chefs/chef1.jpeg",
      rating: 5,
      ratingIcon: "https://img.icons8.com/arcade/64/star.png",
      address: "Calle 123 #45-67",
      phone: "1234567890",
    },
    {
      name: "Camila",
      description:
        "Camila es una chef que rompe esquemas, fusionando técnicas modernas con ingredientes autóctonos. Su creatividad y estilo único la convierten en una verdadera artista de la cocina. Cada creación es un viaje sensorial que invita a explorar nuevos sabores y texturas. Si buscas una experiencia gastronómica audaz y original, Camila es la chef que marcará la diferencia.",
      background: "linear-gradient(to bottom, #6dff5d, #0e8800)",
      image: "./../../../../src/assets/img/Chefs/chef2.jpeg",
      rating: 4,
      ratingIcon: "https://img.icons8.com/arcade/64/star.png",
      address: "Calle 123 #45-67",
      phone: "1234567890",
    },
    {
      name: "Laura",
      description:
        "Laura destaca por su precisión y elegancia en cada plato. Con una formación impecable y un enfoque en la cocina de autor, logra transformar ingredientes simples en obras maestras culinarias. Su pasión por la innovación se refleja en platos que combinan técnica y sensibilidad, ofreciendo siempre una experiencia refinada. Conoce a Laura y déjate cautivar por su inconfundible estilo.",
      background: "linear-gradient(to bottom, #5dbcff, #005a9b)",
      image: "./../../../../src/assets/img/Chefs/chef3.jpeg",
      rating: 4.5,
      ratingIcon: "https://img.icons8.com/arcade/64/star.png",
      address: "Calle 123 #45-67",
      phone: "1234567890",
    },
    {
      name: "Patricia",
      description:
        "Patricia es una chef audaz, siempre en búsqueda de nuevos horizontes en el mundo gastronómico. Su espíritu experimental la lleva a reinventar clásicos, creando propuestas sorprendentes que despiertan la curiosidad y el paladar. Su cocina es una fusión de tradición y modernidad, diseñada para quienes se atreven a explorar sabores diferentes. Conecta con Patricia y vive una experiencia culinaria única e innovadora.",
      background: "linear-gradient(to bottom, #5d75ff, #0018a2)",
      image: "./../../../../src/assets/img/Chefs/chef4.jpeg",
      rating: 3.5,
      ratingIcon: "https://img.icons8.com/arcade/64/star.png",
      address: "Calle 123 #45-67",
      phone: "1234567890",
    },
    {
      name: "Andrea",
      description:
        "Andrea es conocida por su dedicación y atención al detalle en cada creación. Su cocina se basa en la perfección de los sabores y la presentación impecable de sus platos. Con un enfoque en la fusión de ingredientes locales y técnicas de vanguardia, Andrea ofrece una experiencia que deleita tanto a la vista como al paladar. Si buscas calidad y pasión en cada bocado, Andrea es tu opción ideal.",
      background: "linear-gradient(to bottom, #ff0000, #700000)",
      image: "./../../../../src/assets/img/Chefs/chef5.jpeg",
      rating: 5,
      ratingIcon: "https://img.icons8.com/arcade/64/star.png",
      address: "Calle 123 #45-67",
      phone: "1234567890",
    },
    {
      name: "Felipe",
      description:
        "Felipe trae a la mesa una visión fresca y dinámica de la cocina. Con un enfoque en la innovación y el uso de técnicas modernas, sus platos sorprenden por su originalidad y presentación. Siempre en la búsqueda de lo inesperado, Felipe combina creatividad y precisión, logrando propuestas culinarias que invitan a redescubrir el placer de comer. Descubre su mundo y déjate seducir por su espíritu vanguardista.",
      background: "linear-gradient(to bottom, #ff00b7,#81005c)",
      image: "./../../../../src/assets/img/Chefs/chef6.jpeg",
      rating: 4,
      ratingIcon: "https://img.icons8.com/arcade/64/star.png",
      address: "Calle 123 #45-67",
      phone: "1234567890",
    },
  ];

  const ChefRating = ({
    rating,
    ratingIcon,
    halfRatingIcon = defaultHalfRatingIcon,
  }) => {
    // Calcula la cantidad de estrellas completas
    const fullStars = Math.floor(rating);
    // Determina si se debe mostrar media estrella (por ejemplo, 4.5 tendrá 4 completas y 1 media)
    const hasHalfStar = rating - fullStars >= 0.5;

    return (
      <div className="chef-rating">
        {/* Renderiza las estrellas completas */}
        {Array.from({ length: fullStars }, (_, index) => (
          <img key={`full-${index}`} src={ratingIcon} alt="Estrella completa" />
        ))}
        {/* Renderiza la media estrella si corresponde */}
        {hasHalfStar && (
          <img key="half-star" src={halfRatingIcon} alt="Media estrella" />
        )}
      </div>
    );
  };

  const [activeEventIndex, setActiveEventIndex] = useState(0);

  const CardChef = ({ chef, isActive }) => {
    return (
      <div
        className={`CardChef ${isActive ? "active" : ""}`}
        style={{ background: chef.background }}
      >
        <div className="CardChefInner">
          <article className="ImgChefCard">
            <figure>
              <img src={chef.image} alt={chef.name} />
            </figure>
          </article>
          <ChefRating
            rating={chef.rating}
            ratingIcon={chef.ratingIcon}
            halfRatingIcon={chef.halfRatingIcon}
          />
        </div>
      </div>
    );
  };

  return (
    <section className="ChefsSections">
      <div className="container">
        <div className="section-title">
          <h1>✨ Nuestros mejores Chefs ✨</h1>
        </div>
        <div id="CardsChefs">
          <div id="FigureContainer">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              spaceBetween={30}
              modules={[Autoplay, EffectCards]}
              className="mySwiper"
              onSlideChange={(swiper) => {
                setActiveEventIndex(swiper.realIndex);
              }}
              onClick={(swiper) => {
                const clickedSlide = swiper.clickedSlide;
                if (clickedSlide) {
                  const clickedIndex = parseInt(
                    clickedSlide.getAttribute("data-swiper-slide-index")
                  );
                  swiper.slideToLoop(clickedIndex, 300);
                  setActiveEventIndex(clickedIndex);
                }
              }}
            >
              {chefs.map((chef, index) => (
                <SwiperSlide key={index}>
                  <CardChef chef={chef} isActive={index === activeEventIndex} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <article className="CardInfoChef">
            <h2>{chefs[activeEventIndex].name}</h2>
            <p>{chefs[activeEventIndex].description}</p>
            <article className="ContactInfo">
              <span>
                <span className="label">Dirección:</span>
                <span className="value">{chefs[activeEventIndex].address}</span>
              </span>
              <span>
                <span className="label">Teléfono:</span>
                <span className="value">{chefs[activeEventIndex].phone}</span>
              </span>
            </article>
            <button type="button">Contactar</button>
          </article>
        </div>
      </div>
    </section>
  );
}
