const CardDetail = ({
  id,
  name,
  img,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  types,
}) => {
  return (
    <div>
      <h2>ID:{id}</h2>
      <h2>{name}</h2>
      <h2>Hp: {hp}</h2>
      <h2>Attack: {attack}</h2>
      <h2>Defense: {defense}</h2>
      <h2>Speed: {speed}</h2>
      <h2>Heigth: {height}</h2>
      <h2>Weight: {weight}</h2>
      <h2>
        Types:
        {types.map((type) => (
          <span>
            <br />
            {`◉ ${type}`}
          </span>
        ))}
      </h2>
      <br />
      <img src={img} alt={name} />
    </div>
  );
};

export default CardDetail;
