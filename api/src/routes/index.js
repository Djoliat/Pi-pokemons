const router =  require('express').Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const PokemonsRoutes = require("./pokemons")
const typesRoutes = require("./TypesRoutes")
// const TypesRouters = require("./TypesRoutes")


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", PokemonsRoutes)
router.use("/types", typesRoutes)
module.exports = router;
