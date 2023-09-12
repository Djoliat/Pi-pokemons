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
  DELETE
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
    let response = await axios.get(`http://localhost:3001/pokemons/${id}`);
    return dispatch({
      type: POKEMON_DETAIL,
      payload: response.data,
    });
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
    let response = await axios.post(
      "http://localhost:3001/pokemons/create",
      pokemon
    );
    return dispatch({
      type: CREATE_POKEMON,
      response,
    });
  };
};

export const getTypes = () => {
  return async function (dispatch) {
    const info = await axios.get('http://localhost:3001/types');
      return dispatch({ type: GET_TYPE,  payload: info.data });
  };
}

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
    return {
      type: FILTER_CREATE,
      payload,
  };
};

export const deletePokemon = (id) =>{
  return async (dispatch)=>{
    const response = await axios.delete(`http://localhost:3001/pokemons/delete/${id}`)
    return dispatch({
      type: DELETE
    })
  }
}