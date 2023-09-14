const axios = require('axios')
const {Type} = require('../db')
const {API_POKEMON_TYPE} = require('../utils/url')

const getTypeApi = async () => {

    const getTypes = await axios.get(
      API_POKEMON_TYPE
    );
  
    // Lo guardo en mi db con el nombre
    const typesApi = await getTypes.data.results.map((typ) => typ.name);
    
    typesApi.forEach((typ) => {
      Type.findOrCreate({ where: { name: typ } });
    });
    // Retorno todos los tipos de mi db
    let typeBDD = await Type.findAll({
      includes: Type,
    });
   
    return typeBDD;
  };



module.exports = {
  getTypeApi
};


