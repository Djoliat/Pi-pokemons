const router = require("express").Router();
const {getTypeApi} = require("../Controllers/TypeController")
const {Type} = require("../db")
const axios = require("axios")
const {API_POKEMON_TYPE} = require("../utils/url")


router.get("/", async (req, res)=>{
    // console.log("hola");
    try {
        const resultType = await getTypeApi()
        res.json(resultType)
       
        
    } catch (error) {
  res.status(404).json({error:error.message})      
    }
})


module.exports = router