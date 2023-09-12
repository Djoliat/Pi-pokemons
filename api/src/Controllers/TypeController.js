const axios = require('axios')
const {Type} = require('../db')
const {API_POKEMON_TYPE} = require('../utils/url')

const addTypeDb = async () => {
  try {
  const allTypes = await Type.findAll()
  if (allTypes.length) 
  return allTypes
  else{
      console.log(allTypes, "Todos los tipos")
      const reqType = await axios.get(API_POKEMON_TYPE)
      console.log("Request de tipos") //llamado a la api
      const resType = await reqType.data.results
      console.log(resType, "Tipos")
     
      await Promise.all(resType.map(async(typ)=>{
        await Type.create({name: typ.name})
      }))
     const updateTypes = await Type.findAll() 
     return updateTypes
    }
      // resType.map(e =>{
      //   return  Type.create({ 
      //     name: e.name
        // })
    
      // })
      
    } catch (error) {
      return {error: error.message}
  }
  }
addTypeDb()


// 2 - LOS TYPES SON TRAIDOS DE LA BASE DE DATOS Y ENVIADOS AL ROUTER
const getTypeApi = async () => {
  const result = await Type.findAll();
  return result;
}

module.exports = {
  getTypeApi
};



// const getTypeApy = await axios.get(API_POKEMON_TYPE);

  // const typeApi = await getTypeApy.data.results.map((type) => type.name);
  // typeApi.forEach((type) => Type.findOrCreate({ where: { name: type } }));

  // const typeDb = await Type.findAll();
  // return typeDb;

