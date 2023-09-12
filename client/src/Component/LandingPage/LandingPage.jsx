import { NavLink } from "react-router-dom";

const LandignPage = () => {
  return (
    <div>
      <h1>Bienvenidos a la pokedex</h1>
      <p>solo 60 pokemons </p>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
    </div>
  );
};

export default LandignPage;
