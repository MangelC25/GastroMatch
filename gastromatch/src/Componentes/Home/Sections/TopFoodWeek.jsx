import { useState } from "react";
import CardFoodWeek from "../Subcomponentes/CardFoodWeek";
import { motion } from "motion/react";

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

height: 10rem;
  z-index: -10;

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(icons[0].name);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Intervalo entre tarjetas
      },
    },
  };

  const handleActive = (index, category) => {
    setActiveIndex(index); // Actualiza el estado con el índice del ítem clickeado
    setSelectedCategory(category);

    console.log(category);
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
            <div className="food-items">
              {icons.map((icon, index) => (
                <div
                  className={`food-item ${
                    activeIndex === index ? "actived" : ""
                  }`}
                  key={index}
                  onClick={() => handleActive(index, icon.name)} // Pasar el índice al hacer clic
                >
                  <img src={icon.link} alt={icon.name} />
                  <p>{icon.name}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="Topfood-container"
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {foodData[selectedCategory]?.map((food, index) => (
              <CardFoodWeek
                key={index}
                background={food.background}
                image={food.image}
                name={food.name}
                description={food.description}
                rating={food.rating}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
