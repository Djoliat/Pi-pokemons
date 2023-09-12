import { useState } from "react";
import { getPokemonByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./searchBar.module.css";
import { NavLink } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  // const byName = useSelector((state)=>state.pokemonName)

  const handelChange = (event) => {
    event.preventDefault()
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    if (name !== "") {
      dispatch(getPokemonByName(name));
      setName("");
    } else return "Not pokemon found";
  };

  return (
    <div className={style.searchConteiner}>
      <NavLink to="/create">
        <button>Create a pokemon</button>
      </NavLink>
      <input
        type="search"
        value={name}
        onChange={(event) => handelChange(event)}
        placeholder="Search a pokemon..."
      />
      <button onClick={(event) => handleSubmit(event)}>Search</button>
    </div>
  );
};

export default SearchBar;
