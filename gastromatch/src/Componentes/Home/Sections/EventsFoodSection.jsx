import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay } from "swiper/modules";

export default function EventsFoodSection() {
  const bgEventsFood = [
    {
      name: "Festival del Frito cartagenero",
      description:
        "Del 24 de enero al 2 de febrero se realizará la gran fiesta de la tradición gastronómica cartagenera, conocida como el Festival del Frito. Este evento busca resaltar la oferta de fritos como la arepa de huevo, las arepas dulces, los buñuelos de maíz y las empanadas hechas, en su mayoría, por mujeres 'fritangueras'. Sin duda, es un homenaje a la riqueza culinaria local.",
      image: "./../../../../src/assets/img/Eventos/Evento1.jpg",
    },
    {
      name: "Festival Alimentarte",
      description:
        "El 15, 16, 22 y 23 de febrero se llevará a cabo el Festival Alimentarte en el parque El Country de Bogotá. Esta edición, que tendrá como invitada principal a la Región Pacífica, contará con más de 60 expositores de los mejores restaurantes de la capital, incluyendo cuatro restaurantes de la Región Pacífica, 12 de mercados gastronómicos de productos sostenibles y 40 emprendimientos en colaboración con la Secretaría de Desarrollo Económico.",
      image: "./../../../../src/assets/img/Eventos/Evento2.jpg",
    },
    {
      name: "Festival de la ciruela",
      description:
        "Cada marzo, en el municipio de Baranoa, se realiza un evento que resalta la riqueza de la ciruela, uno de los principales productos de la gastronomía del Caribe colombiano. Se trata de un ambiente alegre en el que, tanto los habitantes de Baranoa como los visitantes de cualquier parte del país, pueden disfrutar de todo lo que esta fruta tiene por ofrecer.",
      image: "./../../../../src/assets/img/Eventos/Evento3.jpg",
    },
    {
      name: "Fiesta Nacional del Café",
      description:
        "En Calarcá, Quindío, se rinde homenaje a la rica cultura y la incomparable calidad del café colombiano. Esta celebración, que siempre tiene lugar a finales de junio, se ha mantenido presente desde 1960 y reúne a cientos de personas en torno a actividades como exposiciones artísticas, conciertos vibrantes, competiciones de cata, exposiciones agrícolas y, por supuesto, el tradicional Reinado del Café y el Desfile del Yipao.",
      image: "./../../../../src/assets/img/Eventos/Evento4.jpg",
    },
    {
      name: "Sabor Barranquilla",
      description:
        "Sabor Barranquilla es la feria gastronómica más importante del Caribe colombiano. Este evento suele hacerse en agosto de cada año y desde su primera edición en 2008 ha reunido a cientos de cocineros y cocineras con el fin de resaltar las tradiciones de la región. Su éxito ha sido tan grande, que en 2024 la feria logró una asistencia de más de 25.000 personas, según informó la página oficial del evento.",
      image: "./../../../../src/assets/img/Eventos/Evento5.jpg",
    },
  ];

  const CardEventFood = ({ event, isActive }) => {
    return (
      <div className={`CardEvent ${isActive ? "active" : ""}`}>
        <article className="CardEventInner">
          <img src={event.image} alt={event.name} />
        </article>
      </div>
    );
  };

  const [activeEventIndex, setActiveEventIndex] = useState(0);

  return (
    <section className="Events-food-section">
      <div id="background-events"></div>
      <div className="container">
        <div className="Events-food-title">
          <h2>Próximos Festivales de Sabor</h2>
        </div>
        <div className="Event-food-container">
          <article id="Event-food-info">
            <h2>{bgEventsFood[activeEventIndex].name}</h2>
            <p>{bgEventsFood[activeEventIndex].description}</p>
            <button type="button">Ver más</button>
          </article>
          <div id="Event-food-items">
            <Swiper
            loop={true}
              slidesPerView={2}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              spaceBetween={30}
              modules={[Autoplay]}
              onSlideChange={(swiper) => {
                setActiveEventIndex(swiper.realIndex);
              }}
            >
              {bgEventsFood.map((event, index) => (
                <SwiperSlide key={index}>
                  <CardEventFood
                    event={event}
                    isActive={index === activeEventIndex}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
