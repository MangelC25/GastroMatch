export default function CardsServices({
  title,
  description,
  image,
  button,
}) {
  return (
    <div className="containerCard">
      <div className="card-service">
        <div className="service-icon">
          <figure className="service-image">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="service-title">
          <h3>{title}</h3>
        </div>
        <div className="service-description">
          <p>{description}</p>
        </div>
        <button className="service-button">{button}</button>
      </div>
    </div>
  );
}
