import Pokemons from "../Pokemons/Pokemons";
import SearchBar from "../SearchBar/SeatchBar";
import {
  getPokemons,
  getTypes,
  orderName,
  orderAtack,
  orderType,
  filterCreate,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "./Home.module.css"
const Home = () => {
  const [orden, setOrden] = useState("");
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(getPokemons());
      dispatch(getTypes());
      // dispatch(filterCreate())
    }, [dispatch]);
    
    const types = useSelector((state) => state.types);

  const handleSort = (event) => {
    event.preventDefault();
    dispatch(orderName(event.target.value));
    setOrden(`order ${event.target.value}`);
  };

  const handleAttack = (event) => {
    event.preventDefault();
    dispatch(orderAtack(event.target.value));
    setOrden(`order ${event.target.value}`);
  };

  const handleType = (event) => {
    event.preventDefault();
    dispatch(orderType(event.target.value));
    setOrden(`order ${event.target.value}`);
  };

  const handleCreated = (event)=>{
    event.preventDefault()
    console.log("value", event.target.value);
    dispatch(filterCreate(event.target.value))
  }
  return (
    <div className={style.back}>
      <select onChange={(event) => handleSort(event)}>
        <option> ORDER BY NAME</option>
        <option value="asc">Ascending Order</option>
        <option value="desc">Descending Order</option>
      </select>
      <select onChange={(event) => handleAttack(event)}>
        <option>ORDER BY ATTACK</option>
        <option value="stronger">Stronger</option>
        <option value="wickest">Wickest</option>
      </select>
      <select onChange={(event) => {handleType(event)}}>
        <option value="all">All Types</option>
        {types?.map((element) => (
          <option key={element.name} value={element.name}>{element.name}</option>
        ))}
      </select>
      <select onChange={(event)=>handleCreated(event)}>
        <option value="all">All Pokemons</option>
        <option value="api">Real Pokemons</option>
        <option value="created">Created</option>
      </select>
      <div>
        
      </div>
      <SearchBar />
      <Pokemons />
    </div>
  );
};

export default Home;
