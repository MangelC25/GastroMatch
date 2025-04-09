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

  const foodData = {
    "Comidas Rapidas": [
      {
        background:
          "./../../../../../src/assets/img/el-corral-hamburguesas-callejera..png",
        image:
          "./../../../../../src/assets/img/el-corral-hamburguesas-todoterreno-callejera..png",
        name: "Todoterreno Callejera",
        description:
          "Dos carnes 100% de res de 125 g a la parrilla cada una, con salsa BBQ, tocineta, papas callejeras, una tajada de queso tipo mozzarella, mostaza y salsa blanca en pan ajonjolí.",
        rating: 4.5,
      },
      {
        background: "./../../../../../src/assets/img/FribyArepasPollo.jpeg",
        image: "./../../../../../src/assets/img/pollo.webp",
        name: "Medio Frisby Bbq Arepas",
        description:
          "4 Presas bañadas en salsa bbq ligeramente picante y 6 arepas",
        rating: 4.5,
      },
      {
        background: "./../../../../../src/assets/img/PerroCaliente.webp",
        image: "./../../../../../src/assets/img/PerroCaliente.png",
        name: "King Imperial",
        description:
          "Perro caliente con cuatro salchichas americanas zenú, cebolla, 8 huevos de codorniz, salsa de tomate, mayonesa, rosada, piña, jamón, queso y papas chips.",
        rating: 4.5,
      },
    ],
    "Postres": [
      {
        background: "./../../../../../src/assets/img/tarta.jpg",
        image: "./../../../../../src/assets/img/tarta.png",
        name: "Tarta Julia",
        description:
          "Inspirada en la tarta de reyes y la tarta De Santiago, con el toque nuestro del chocolate y las naranjas confitadas!.",
        rating: 4.5,
      },
      {
        background:
          "./../../../../../src/assets/img/cheeskey.jpg",
        image:
          "./../../../../../src/assets/img/cheeskey.png",
        name: "Bogotá Cheesecake",
        description:
          "Torta de queso con una fruta tropical llamada guanábana. Su aroma es sutil, Su textura es cremosa, Está sobre galleta tipo graham.",
        rating: 4.5,
      },
      {
        background: "./../../../../../src/assets/img/torta-de-santiago.png",
        image: "./../../../../../src/assets/img/torta-santiago.png",
        name: "Torta de Santiago",
        description:
          "Tarta tradicional de la cocina gallega, ideal para los amantes de la almendra. Exquisitez preparada 100% con harina de almendras, libre de gluten y lácteos. Estos valores no incluyen domicilios.",
        rating: 4.5,
      },
    ],
    "Comida Japonesa": [
      {
        background: "./../../../../../src/assets/img/tarta.jpg",
        image: "./../../../../../src/assets/img/tarta.png",
        name: "Tarta Julia",
        description:
          "Inspirada en la tarta de reyes y la tarta De Santiago, con el toque nuestro del chocolate y las naranjas confitadas!.",
        rating: 4.5,
      },
      {
        background:
          "./../../../../../src/assets/img/cheeskey.jpg",
        image:
          "./../../../../../src/assets/img/cheeskey.png",
        name: "Bogotá Cheesecake",
        description:
          "Torta de queso con una fruta tropical llamada guanábana. Su aroma es sutil, Su textura es cremosa, Está sobre galleta tipo graham.",
        rating: 4.5,
      },
      {
        background: "./../../../../../src/assets/img/torta-de-santiago.png",
        image: "./../../../../../src/assets/img/torta-santiago.png",
        name: "Torta de Santiago",
        description:
          "Tarta tradicional de la cocina gallega, ideal para los amantes de la almendra. Exquisitez preparada 100% con harina de almendras, libre de gluten y lácteos. Estos valores no incluyen domicilios.",
        rating: 4.5,
      },
    ],
    "Comida Mexicana": [
      {
        background: "./../../../../../src/assets/img/tarta.jpg",
        image: "./../../../../../src/assets/img/tarta.png",
        name: "Tarta Julia",
        description:
          "Inspirada en la tarta de reyes y la tarta De Santiago, con el toque nuestro del chocolate y las naranjas confitadas!.",
        rating: 4.5,
      },
      {
        background:
          "./../../../../../src/assets/img/cheeskey.jpg",
        image:
          "./../../../../../src/assets/img/cheeskey.png",
        name: "Bogotá Cheesecake",
        description:
          "Torta de queso con una fruta tropical llamada guanábana. Su aroma es sutil, Su textura es cremosa, Está sobre galleta tipo graham.",
        rating: 4.5,
      },
      {
        background: "./../../../../../src/assets/img/torta-de-santiago.png",
        image: "./../../../../../src/assets/img/torta-santiago.png",
        name: "Torta de Santiago",
        description:
          "Tarta tradicional de la cocina gallega, ideal para los amantes de la almendra. Exquisitez preparada 100% con harina de almendras, libre de gluten y lácteos. Estos valores no incluyen domicilios.",
        rating: 4.5,
      },
    ],
    "Bebidas": [
      {
        background: "./../../../../../src/assets/img/tarta.jpg",
        image: "./../../../../../src/assets/img/tarta.png",
        name: "Tarta Julia",
        description:
          "Inspirada en la tarta de reyes y la tarta De Santiago, con el toque nuestro del chocolate y las naranjas confitadas!.",
        rating: 4.5,
      },
      {
        background:
          "./../../../../../src/assets/img/cheeskey.jpg",
        image:
          "./../../../../../src/assets/img/cheeskey.png",
        name: "Bogotá Cheesecake",
        description:
          "Torta de queso con una fruta tropical llamada guanábana. Su aroma es sutil, Su textura es cremosa, Está sobre galleta tipo graham.",
        rating: 4.5,
      },
      {
        background: "./../../../../../src/assets/img/torta-de-santiago.png",
        image: "./../../../../../src/assets/img/torta-santiago.png",
        name: "Torta de Santiago",
        description:
          "Tarta tradicional de la cocina gallega, ideal para los amantes de la almendra. Exquisitez preparada 100% con harina de almendras, libre de gluten y lácteos. Estos valores no incluyen domicilios.",
        rating: 4.5,
      },
    ],
  };

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
