import { useState } from "react";

const Paginacion = ({ pagina, setPagina, maxPag }) => {
  const [input, setInput] = useState(1);
  console.log(maxPag);

  const nextPage = () => {
    setInput(input + 1);
    setPagina(pagina + 1);
};
    const backPage = () => {
      setInput(input - 1);
      setPagina(pagina - 1);
  };

  return (
    <div>
      <button disabled={ pagina=== 1} onClick={backPage}> ⇽ </button>
      <input name="page" autoComplete="off" value={input} />
      <p>of {maxPag}</p>
      <button disabled={ pagina === maxPag} onClick={nextPage}>⇾</button>
    </div>
  );
};

export default Paginacion;
