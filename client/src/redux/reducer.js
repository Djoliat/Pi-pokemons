

import {
  CREATE_POKEMON,
  GET_POKEMONS,
  GET_TYPE,
  POKEMON_DETAIL,
  POKEMON_NAME,
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  FILTER_CREATE,
  FILTER_TYPE,
  DELETE,
} from "./action-types";

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  detail: [{}],
  // pokemonName:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case POKEMON_DETAIL: {
      return {
        ...state,
        detail: action.payload,
      };
    }
    case POKEMON_NAME: {
      return {
        ...state,
        pokemons: action.payload,
      };
    }
    case CREATE_POKEMON: {
      return {
        ...state,
        // pokemons:[...state.pokemons, action.payload]
      };
    }
    case GET_TYPE: {
      console.log(action.payload);
      return {
        ...state,
        types: action.payload,
      };
    }
    case ORDER_BY_NAME: {
      if (action.payload === "asc") {
        state.pokemons.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
      } else if (action.payload === "desc") {
        state.pokemons.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        });
      } else {
        state.pokemons.sort((a, b) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        });
      }
      return {
        ...state,
        pokemons: [...state.pokemons],
      };
    }
    case ORDER_BY_ATTACK: {
      if (action.payload === "stronger") {
        state.pokemons.sort((a, b) => {
          if (a.attack > b.attack) return -1;
          if (a.attack < b.attack) return 1;
          return 0;
        });
      } else {
        state.pokemons.sort((a, b) => {
          if (a.attack > b.attack) return 1;
          if (a.attack < b.attack) return -1;
          return 0;
        });
      }
      return {
        ...state,
        pokemons: [...state.pokemons],
      };
    }

    case FILTER_TYPE: {
      const pokemonByType = state.allPokemons;
      const estadoFiltrado =
        action.payload === "all"
          ? pokemonByType
          : pokemonByType.filter((element) =>
              element.types.includes(action.payload)
            );
      console.log(estadoFiltrado);
      return {
        ...state,
        pokemons: estadoFiltrado,
      };
    }
    case FILTER_CREATE: {
      const createdFilter = [...state.pokemons];
      // console.log(action.payload)
      if (action.payload === "all") {
        return {
          ...state,
          pokemons: state.allPokemons,
        };
      }
      if (action.payload === "api") {
        return {
          ...state,
          pokemons: createdFilter.filter(
            (element) => typeof element.id === "number"
          ),
        };
      } else {
        return {
          ...state,
          pokemons: createdFilter.filter(
            (element) => typeof element.id !== "number"
          ),
        };
      }
    }
    case DELETE:
      return {
        ...state
      }
    default:
      return { ...state };
  }
};

export default reducer;
