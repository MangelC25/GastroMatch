

export default function CardFoodWeek({
  background,
  image,
  name,
  description,
  rating,
}) {
  
  return (
    <div className="CardFood">
      <article className="CardfoodInner">
        <img src={background} alt={name} />
        <img src={image} alt="food" />
      </article>
      <div className="food-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <span>⭐ {rating}</span>
      </div>
    </div>
  );
}
