import axios from "axios";
import {
  CREATE_POKEMON,
  GET_POKEMONS,
  GET_TYPE,
  POKEMON_DETAIL,
  POKEMON_NAME,
  ORDER_BY_ATTACK,
  FILTER_CREATE,
  FILTER_TYPE,
  ORDER_BY_NAME,
  DELETE,
} from "./action-types";

export const getPokemons = () => {
  return async (dispatch) => {
    let response = await axios.get("http://localhost:3001/pokemons/");
    return dispatch({
      type: GET_POKEMONS,
      payload: response.data,
    });
  };
};
export const getPokemonDetail = (id) => {
  return async (dispatch) => {
    try {
      let response = await axios.get(`http://localhost:3001/pokemons/${id}`);
      if (response.data) {
        dispatch({
          type: POKEMON_DETAIL,
          payload: response.data,
        });
      } else {
        // Manejo de error si response.data es nulo o vacío
        console.error("No se encontraron datos para el Pokémon con ID:", id);
      }
    } catch (error) {
      // Manejo de otros errores, como problemas de red
      console.error("Error al obtener detalles del Pokémon:", error);
    }
  };
};

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    let response = await axios.get(
      `http://localhost:3001/pokemons?name=${name}`
    );
    return dispatch({
      type: POKEMON_NAME,
      payload: response.data,
    });
  };
};

export const createPokemon = (pokemon) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/pokemons/create",
        pokemon
      );

      if (response.data) {
        // Si la respuesta contiene datos, significa que el Pokémon se creó correctamente
        dispatch({
          type: CREATE_POKEMON,
          payload: response.data, // Pasamos los datos del nuevo Pokémon como payload
        });
      } else {
        // Manejar el caso en que no se pudo crear el Pokémon
        // Puedes agregar un mensaje de error o realizar alguna otra acción apropiada
        console.error("No se pudo crear el Pokémon.");
      }
    } catch (error) {
      // Manejar cualquier error de la solicitud
      return { error: error.message };
    }
  };
};
export const getTypes = () => {
  return async function (dispatch) {
    const info = await axios.get("http://localhost:3001/types");
    return dispatch({ type: GET_TYPE, payload: info.data });
  };
};

export const orderName = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: ORDER_BY_NAME,
      payload,
    });
  };
};

export const orderAtack = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: ORDER_BY_ATTACK,
      payload,
    });
  };
};

export const orderType = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: FILTER_TYPE,
      payload,
    });
  };
};

export const filterCreate = (payload) => {
  console.log(payload);
  return (dispatch) => {
    return dispatch({
      type: FILTER_CREATE,
      payload,
    });
  };
};

export const deletePokemon = (id) => {
  return async (dispatch) => {
    const response = await axios.delete(
      `http://localhost:3001/pokemons/delete/${id}`
    );
    return dispatch({
      type: DELETE,
    });
  };
};
