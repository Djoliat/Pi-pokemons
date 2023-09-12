const axios = require("axios")
const {Pokemon, Type} = require ("../db")
const {API_POKEMON} = require("../utils/url")


const getPokemonsApi = async ()=>{
    const url = await axios.get(API_POKEMON);
    const url2 = url.data.results.map((pok)=> axios.get(pok.url));
    let info = [];

    let results = await axios.all(url2).then((poke)=>{
        poke.map((pokemon)=>{
            info.push({
                id: pokemon.data.id,
                name: pokemon.data.name,
                img: pokemon.data.sprites.other.dream_world.front_default,
                hp: pokemon.data.stats[0].base_stat ? pokemon.data.stats[0].base_stat : "",
                attack: pokemon.data.stats[1].base_stat ? pokemon.data.stats[1].base_stat : "",
                defense: pokemon.data.stats[2].base_stat ? pokemon.data.stats[2].base_stat : "",
                speed: pokemon.data.stats[5].base_stat ? pokemon.data.stats[5].base_stat : "",
                height: pokemon.data.height ? pokemon.data.height : "",
                weight: pokemon.data.weight ? pokemon.data.weight : "",
                types: pokemon.data.types.map((p) => p.type.name)
                  ? pokemon.data.types.map((p) => p.type.name)
                  : "",
        
        })
        })
        return info
    })
    return results
}

const getPokemonDB= async () =>{
  let pokemonDb = await Pokemon.findAll({
    include:[{
        model: Type,
        attributes: ["name"],
        througth:{
            attributes:[]
        }
    }]
  })
let pokemonsMap = pokemonDb.map(pokemon =>{
    return {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
        img: pokemon.img,
        types: pokemon.types.map(curr => curr.name)
    }
})
return pokemonsMap
}

const getAllPokemons = async (name) => {
    try{
    let [api, bd] = await Promise.all([getPokemonsApi(), getPokemonDB()]);

    let infoTotal = [...bd, ...api];
    //si recibo un nombre por query entra en el if y filtro ese nombre sino devuelvo todos los Pokemons
    if (name) {
      let pokemonName = infoTotal.filter((el) => {
        return el.name.toLowerCase().includes(name.toLowerCase());
      });
      return pokemonName;
    } else {
      return infoTotal;
    }
  } catch (error) {
    console.log("ERROR en getPokemons: " + error);
  }
}

module.exports={
    getAllPokemons,
    getPokemonDB,
    getPokemonsApi
}