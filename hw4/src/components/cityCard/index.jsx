function CityCard({ name, description, image, facts }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>{description}</p>
      <ul>
        {facts.map((fact) => (
          <li>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CityCard;
