const router = require("express").Router();
const { getAllPokemons } = require("../Controllers/pokemonsControllers");
const { Pokemon, Type } = require("../db");

router.get("/", async (req, res) => {
  try {
  const { name } = req.query;
  if (name){
    const pokeName = await getAllPokemons(name)
    return res.status(200).json(pokeName)

  }
  const allPokemons = await getAllPokemons();
    if (!allPokemons) {
      return res.status(400).send("not pokemons found");
    } else return res.status(200).json(allPokemons);
  } catch (error) {
    res.status(500), send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const pokemons = await getAllPokemons();
  try {
    if (id) {
      const pokemonById = pokemons.filter((pokemon) => pokemon.id === +id);
      return res.status(200).json(pokemonById);
    } else return res.status(400).send(`${id} not found`);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
router.post("/create", async (req, res) => {
  const { name, hp, attack, defense, speed, img, height, weight, types } =
    req.body;

  if (!name || !hp || !attack || !defense || !speed || !height || !weight )
    res.status(400).json({ msg: "Faltan datos" }); 
  try {
    const obj = {
      name,
      img,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      types,
    };
    const nvoPokemon = await Pokemon.create(obj);

    
    const tipos = await Type.findAll({
      where: {
        name: types,
      },
    });
    ;
nvoPokemon.addType(tipos);


  // console.log(img)
  
  nvoPokemon
  ? res.status(200).send("Pokemon creado con exito")
  : res.status(400).send("No se pudo crear el pokemon");
  return nvoPokemon;
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
 try {
   const { id } = req.params;
   const pokemonFind= await Pokemon.findByPk(+id)
   if (pokemonFind) {
     const deletePokemon = pokemonFind.destroy();
     return res.status(200).json(`pokemon deleted ${deletePokemon}`)
   } else return res.status(400).send(`pokemon id:${id} not found`)
  
 } catch (error) {
  res.status(500).send(error.message)
}
});

module.exports = router;
