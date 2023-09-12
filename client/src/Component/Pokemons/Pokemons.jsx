import { getPokemons, } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Card from "../Card/Card";
import Paginacion from "../Paginacion/Paginacion";
// import "./pokemon.css"
import style from "./Pokemon.module.css"
const Pokemons = () => {
  const dispatch = useDispatch();
  const pokemones = useSelector((state) => state.pokemons);
  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(12);

  const maxPag = Math.ceil(pokemones.length / porPagina);
  // console.log(maxPag);

  return (
     <div >
       <h1 className={style.title}>pokemons</h1>

    <div className={style.parent}>
      {pokemones
        .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
        .map((pokemon) => {
          return (
            <NavLink to={`/detail/${pokemon.id}`}>
              
              <Card 
                key={pokemon?.id}
                img={pokemon?.img}
                name={pokemon?.name}
                types={pokemon?.types}
                />
            </NavLink>
          );
        })}
        <div className={style.pag}>

      <Paginacion pagina={pagina} setPagina={setPagina} maxPag={maxPag} />
        </div>
    </div>
        </div>
  );
};

export default Pokemons;
