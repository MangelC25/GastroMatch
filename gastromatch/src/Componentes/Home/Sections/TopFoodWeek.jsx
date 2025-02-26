import { useState } from "react";
import CardFoodWeek from "../Subcomponentes/CardFoodWeek";

export default function TopFoodWeek() {
  const icons = [
    {
      link: "https://img.icons8.com/emoji/30/hamburger-emoji.png",
      name: "Comidas Rapidas",
    },
    {
      link: "https://img.icons8.com/deco-color/30/cupcake.png",
      name: "Postres",
    },
    {
      link: "https://img.icons8.com/fluency/30/noodles.png",
      name: "Comida Japonesa",
    },
    {
      link: "https://img.icons8.com/color-glass/30/taco.png",
      name: "Comida Mexicana",
    },
    {
      link: "https://img.icons8.com/arcade/30/soda-cup.png",
      name: "Bebidas",
    },
  ];

  const FoodItem = [
    {
      background:
        "./../../../../../src/assets/img/el-corral-hamburguesas-callejera..png",
      image:
        "./../../../../../src/assets/img/el-corral-hamburguesas-todoterreno-callejera..png",
      name: "Todoterreno Callejera",
      description: "Dos carnes 100% de res de 125 g a la parrilla cada una, con salsa BBQ, tocineta, papas callejeras, una tajada de queso tipo mozzarella, mostaza y salsa blanca en pan ajonjolí.",
      rating:4.5,
    },
    {
      background:
        "./../../../../../src/assets/img/FribyArepasPollo.jpeg",
      image:
        "./../../../../../src/assets/img/pollo.webp",
      name: "Medio Frisby Bbq Arepas",
      description: "4 Presas bañadas en salsa bbq ligeramente picante y 6 arepas",
      rating: 4.5,
    },{
      background:
        "./../../../../../src/assets/img/PerroCaliente.webp",
      image:
        "./../../../../../src/assets/img/PerroCaliente.png",
      name: "King Imperial",
      description: "Perro caliente con cuatro salchichas americanas zenú, cebolla, 8 huevos de codorniz, salsa de tomate, mayonesa, rosada, piña, jamón, queso y papas chips.",
      rating: 4.5,
    },
  ];

  const FoodItems = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Estado para el índice activo

    const handleActive = (index) => {
      setActiveIndex(index); // Actualiza el estado con el índice del ítem clickeado
    };

    return (
      <div className="food-items">
        {icons.map((icon, index) => (
          <div
            className={`food-item ${activeIndex === index ? "actived" : ""}`}
            key={index}
            onClick={() => handleActive(index)} // Pasar el índice al hacer clic
          >
            <img src={icon.link} alt={icon.name} />
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="top-food-week-section">
      <div className="container">
        <div className="top-food-week__title">
          <h2>Los Imperdibles de la Semana</h2>
          <p>
            Explora los sabores más irresistibles y descubre qué delicias están
            conquistando paladares esta semana. Desde jugosas hamburguesas hasta
            exquisito sushi, ¡prepárate para un festín que te hará agua la boca!
          </p>
        </div>
        <div className="top-food-week__content">
          <div className="filterfood-container">
            <FoodItems />
          </div>
          <div className="Topfood-container">
            {FoodItem.map((food, index) => (
              <CardFoodWeek
                key={index}
                background={food.background}
                image={food.image}
                name={food.name}
                description={food.description}
                rating={food.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
