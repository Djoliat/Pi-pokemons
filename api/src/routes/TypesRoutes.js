const router = require("express").Router();
const {getTypeApi} = require("../Controllers/TypeController")
const {Type} = require("../db")
const axios = require("axios")
const {API_POKEMON_TYPE} = require("../utils/url")


router.get("/", async (req, res)=>{
    // console.log("hola");
   const resultType = await getTypeApi()
   res.json(resultType)
  
})


module.exports = router