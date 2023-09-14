import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPokemon, getTypes } from "../../redux/actions";
import Validation from "./Validation";
import { NavLink } from "react-router-dom";
import style from "./Form.module.css"

const form = () => {
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

  const dispatch = useDispatch();
  const tipos = useSelector((state) => state.types);
  const [error, setError] = useState({});
  let [disEna, setDisEna] = useState(false);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleChange = (event) => {
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
  };
  // const handleSelect = (event) => {
  //   setInput({
  //     ...input,
  //     type: [...input.type, event.target.value],
  //   });
  // };

  
  const handleTypes = (event) => {
    const selectedType = event.target.value;
    if (!input.types.includes(selectedType)) {
      setInput((prevState) => ({
        ...prevState,
        types: [...prevState.types, selectedType],
      }));
      
    } else {
      
      alert("The type is already selected");
    }
    // console.log(input.types)// Agrega esta línea para verificar los tipos seleccionados
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log("hola", input);
    console.log("Tipos seleccionados:", input.types);
    if(input.types.length=== 0){
      alert("Please select at least one type.");
      return;
    }
    try {
      const response = await dispatch(createPokemon(input));
      console.log(response);
      if (response && response.data) {
        // Actualiza el estado local con el Pokémon creado por el servidor, incluyendo los tipos
        const createdPokemon = response.data;
      setInput({
        name: "",
        img: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: createdPokemon.types,
      });
    }
    alert("Pokemon created");
    
    } catch (error) {
      return ({error:error.message})
    }
  };
  
  const handleDelete = (deletedType) => {
    const updatedTypes = input.types.filter((type) => type !== deletedType);
    setInput((prevState) => ({
      ...prevState,
      types: updatedTypes,
    }));
  };
  return (
    <div className={style.container}>
      <NavLink to="/home" className={style.link}>
        <button className={style.button}>Home</button>
      </NavLink>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className={style.inputContainer}>
          <label className={style.label} >Name: </label>
          <input
            type="text"
            value={input.name}
            name={"name"}
            onChange={(event) => handleChange(event)}
            className={style.input}
          />
           {error.name && <p style={{color: 'red'}}>{error.name} </p>}
        </div>
        <div>
          <label className={style.label}>Image:</label>
          <input
            alt="not found"
            value={input.img}
            name={"img"}
            pattern="https?://.*"
            title="FORMATO URL"
            placeholder="URL de imagen"
            onChange={handleChange}
            className={style.inputContainer}
          />
          
        </div>
        <div>
          <label className={style.label}>Weight: </label>
          <input
            type="number"
            value={input.weight}
            name="weight"
            onChange={handleChange}
            className={style.inputContainer}
          />
          {error.weight && <p style={{color: 'red'}}>{error.weight} </p>}
        </div>
        <div>
          <label className={style.label}>HP: </label>
          <input
            type="number"
            value={input.hp}
            name="hp"
            onChange={handleChange}
            className={style.inputContainer}
          />
          {error.hp && <p style={{color: 'red'}}>{error.hp}</p>}
        </div>
        <div>
          <label className={style.label}>Speed: </label>
          <input
            type="number"
            value={input.speed}
            name="speed"
            onChange={handleChange}
            className={style.inputContainer}
          />
          {error.speed && <p style={{color: 'red'}}>{error.speed}</p>}
        </div>
        <div>
          <label className={style.label}>Attack: </label>
          <input
            type="number"
            value={input.attack}
            name="attack"
            onChange={handleChange}
            className={style.inputContainer}
          />
          {error.attack && <p style={{color: 'red'}}>{error.attack}</p>}
        </div>
        <div>
          <label className={style.label}>Defense: </label>
          <input
            type="number"
            value={input.defense}
            name="defense"
            onChange={handleChange}
            className={style.inputContainer}
          />
          {error.defense && <p style={{color: 'red'}}>{error.defense}</p>}
        </div>
        <div>
          <label className={style.label}>height:</label>
          <input
            type="number"
            value={input.height}
            name="height"
            onChange={handleChange}
            className={style.inputContainer}
            
          />
          {error.height && <p style={{color: 'red'}}>{error.height}</p>}
        </div>
        <div className={style.inputContainer}>
          <label className={style.label}>type:</label>

          <select onChange={(select) => handleTypes(select)}
           className={style.select}>
             {tipos?.map((element) => (
          <option key={element.name} value={element.name}>{element.name}</option>
        ))}
          </select>

         {input.types?.map((element)=>(
          <div className={style.deleteButton} key={element}>
          <p className={style.typeContainer} >{element}</p>
          {
            <button className={style.submitButton}
            onClick={()=>{handleDelete(element)}}>
              x
            </button>
          }
          </div>
         ))}
          <p className={style.error}>{input.types.length >= 3 ? error.types : ""}</p>
          <p className={style.info}>
            {input.types.length === 1 ? "Puedes agregar 1 mas si quieres!" : ""}
          </p>
        </div>
        <div>

        <button className={style.submitButton} type="submit">Create pokemon</button>
       
        </div>

      </form>
    </div>
  );
};
export default form;
