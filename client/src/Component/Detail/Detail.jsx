import { getPokemonDetail } from "../../redux/actions";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardDetail from "../Card/CardDetail";
import style from "./Detail.module.css";


//useSelectorpara traer info del estado global al componente
const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(
    () => {
      dispatch(getPokemonDetail(id));
    },
    [id, dispatch]
  );
  const info = useSelector((state) => state.detail);
  let pokemon;

  if (!isNaN(id) && id !== null) {
    pokemon = info.find((poke) => poke.id === +id);
  } else {
    pokemon = info.find((poke) => poke.id === id);
  }
  console.log(pokemon);
  return (
    <div>
      <NavLink className={style.back} to="/home">
        <button className={style.back}>Home</button>
      </NavLink>
      {pokemon ? (
        <div>

                <CardDetail
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  hp={pokemon.hp}
                  attack={pokemon.attack}
                  defense={pokemon.defense}
                  speed={pokemon.speed}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  types={pokemon.types}
                  img={pokemon.img}
                />
            
    
        </div>
              
      ) : (
        <div>
            "not pokemons found"
        </div>
      )}
    </div>
  );
};

export default Detail;
