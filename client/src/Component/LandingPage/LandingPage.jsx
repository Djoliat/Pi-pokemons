import { NavLink } from "react-router-dom";
import style from "./LandingPage.module.css"
import agua from "../../img/pokemon-agua.jpg";
import fuego from "../../img/pokemon-fuego.jpg"

const LandignPage = () => {
  return (
    <div className={style.back}>
    <div >
      <h2>agua
      </h2>
      <img className={style.listaDeImagenes} src={agua} alt="agua" />
    </div>
    <div>
      <h2>fuego 
      </h2>
        <img className={style.listaDeImagenesFuego} src={fuego} alt="fuego" />
    </div>
  
  
      <h1>Bienvenidos a la pokedex</h1>
      <p>more than 160 pokemons </p>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
    </div>
  );
};

export default LandignPage;
