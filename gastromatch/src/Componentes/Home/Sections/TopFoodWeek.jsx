export default function TopFoodWeek() {
  const icons = [
    {
      link: "https://img.icons8.com/emoji/25/hamburger-emoji.png",
      name: "Burger",
    },
    { link: "https://img.icons8.com/color-glass/25/pizza.png", name: "Pizza" },
    {
      link: "https://img.icons8.com/deco-color/25/cupcake.png",
      name: "Cupcake",
    },
    { link: "https://img.icons8.com/color-glass/25/sushi.png", name: "Sushi" },
    { link: "https://img.icons8.com/color-glass/25/taco.png", name: "Taco" },
    {
      link: "https://img.icons8.com/emoji/25/steaming-bowl-emoji.png",
      name: "Ramen",
    },
  ];

  const FoodItems = () => {
    return (
      <div className="food-items">
        {icons.map((icon, index) => (
          <div className="food-item" key={index}>
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
          <div className="Topfood-container"></div>
        </div>
      </div>
    </section>
  );
}
