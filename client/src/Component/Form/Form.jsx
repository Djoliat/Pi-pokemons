import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getTypes } from "../../redux/actions";
import Validation from "./Validation";
import { NavLink } from "react-router-dom";

const form = () => {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.types);
  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setError(
      Validation({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  }
  // const handleSelect = (event) => {
  //   setInput({
  //     ...input,
  //     type: [...input.type, event.target.value],
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    dispatch(createPokemon(input));
    setInput({
      name: "",
      img: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
    alert("Pokemon created");
  };

  const handleTypes = (event) => {
    if (!input.types.includes(event.target.value)) {
      setInput({ ...input, types: [input.types, event.target.value] });
    } else {
      alert("The type is alrready exist ");
    }
  };

  const handleDelete = (event) => {
    const tipoID = input.types.filter(((type) => type !== event))
    setInput({...input, types: tipoID });

  }

  return (
    <div>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            alt="not found"
            value={input.img}
            name="img"
            pattern="https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$"
            title="FORMATO URL"
            placeholder="URL de imagen"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Weight </label>
          <input
            type="number"
            value={input.weight}
            name="weight"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>HP </label>
          <input
            type="number"
            value={input.hp}
            name="hp"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Speed </label>
          <input
            type="number"
            value={input.speed}
            name="speed"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Attack </label>
          <input
            type="number"
            value={input.attack}
            name="attack"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Defense </label>
          <input
            type="number"
            value={input.defense}
            name="defense"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>height:</label>
          <input
            type="number"
            value={input.height}
            name="height"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>type:</label>
          <select onChange={(select) => handleTypes(select)}>
            {type?.map((tipo) => {
              return (
                <option name={tipo.name} value={tipo.name}>
                  {tipo.types}
                </option>
              );
            })}
          </select>

          {input.types?.map((typ) => {
            return(
              <div key={typ}>
                <p>{typ}</p>
              {
                <button onClick={()=>{
                  handleDelete(event)
                }}>
                x
                </button>
              }
              
              </div>
              

            )
          })}
        </div>
        <div></div>
        <button type="submit">Create pokemon</button>
      </form>
    </div>
  );
};
export default form;
