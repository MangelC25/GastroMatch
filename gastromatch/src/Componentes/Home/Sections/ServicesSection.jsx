import CardsServices from "../Subcomponentes/CardsServices";
import { CheckCircle } from "lucide-react";

export default function ServicesSection() {
  const cards = [
    {
      title: "🍴 Reservaciones",
      description:
        "✨ Disfruta de la magia de una buena mesa. Encuentra el restaurante ideal para cualquier ocasión: cenas románticas, reuniones con amigos o celebraciones especiales. 🌟 Con unos pocos clics, asegura tu lugar en los mejores establecimientos de la ciudad. ¡Tu próxima experiencia gastronómica comienza aquí! 🍷",
      image: "./../src/assets/img/reserve.jpeg",
      button: "🔗 Reservar Ahora",
      bgColor: "linear-gradient(to bottom,rgb(187, 0, 250),rgb(87, 0, 250))",
    },
    {
      title: "🚗 Delivery & Takeaway",
      description:
        "🍕 ¡Tu comida favorita donde quieras! Elige entre cientos de menús disponibles, realiza tu pedido y relájate mientras lo llevamos a tu puerta. 🏠 ¿Prefieres recogerlo? Preparamos todo para que no pierdas tiempo. Sabores irresistibles, justo a un clic de distancia. 🚀",
      image: "./../src/assets/img/delivery.jpeg",
      button: "📦 Ordenar Comida",
      bgColor: "linear-gradient(to bottom,rgb(250, 237, 0),rgb(250, 192, 0))",
    },
    {
      title: "🎉 Eventos Gastronómicos",
      description:
        "🍸 Convierte cada ocasión en algo inolvidable. Descubre eventos exclusivos como catas de vino, talleres de cocina y banquetes gourmet. 🎶 Ya sea que busques una experiencia íntima o una gran celebración, tenemos el evento perfecto para ti. ¡Déjate sorprender y vive momentos únicos! 🎂",
      image: "./../src/assets/img/events.jpeg",
      button: "📅 Ver Eventos",
      bgColor: "linear-gradient(to bottom, #00fae3, #00a6fa)",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
        </div>
        <div className="cards-services-container">
          {cards.map(({ title, description, image, button, bgColor}) => (
            <CardsServices
              key={title}
              title={title}
              description={description}
              image={image}
              button={button}
              bgColor={bgColor}
            />
          ))}
        </div>
        <div className="services-description">
            <p>
                <CheckCircle id="CheckCircle" /> Más de 10,000 usuarios y 500 restaurantes confían en nosotros.
            </p>
        </div>
      </div>
    </section>
  );
}
