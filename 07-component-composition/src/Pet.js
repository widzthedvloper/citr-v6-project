const Pet = (props) => {
  const { name, animal, breed, image, location, id } = props;

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </a>
  );
};

export default Pet;