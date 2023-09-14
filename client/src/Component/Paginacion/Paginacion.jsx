import { useState } from "react";
import style from "./Paginacion.module.css"

const Paginacion = ({ pagina, setPagina, maxPag }) => {
  const [input, setInput] = useState(1);
  console.log(maxPag);

  const handleInputChange = (event)=>{
    const inputValue = event.target.value
    setInput(inputValue)
  }

  const nextPage = () => {
    setInput(input + 1);
    setPagina(pagina + 1);
};
    const backPage = () => {
      setInput(input - 1);
      setPagina(pagina - 1);
  };

  return (

    <div className={style.contenedor}>

      <button
      className={style.boton} 
      disabled={ pagina=== 1} 
      onClick={backPage}> ⇽ </button>
      <input 
      className={style.input}
      name="page" 
      autoComplete="off" 
      value={input}
      onChange={(event)=>handleInputChange(event)} />
      <p className={style.texto} >of {maxPag}</p>
      <button
      className={style.boton}
      disabled={ pagina === maxPag}
      onClick={nextPage}>⇾</button>
      </div>

  );
};

export default Paginacion;
