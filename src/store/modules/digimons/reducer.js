import { ADD_DIGIMONS } from "./actionsTypes";

const digimonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DIGIMONS:
      const { digimon } = action;

      const aux = state.map((e) => e.name === digimon[0].name);

      if (!aux.includes(true)) {
        state = [...state, digimon[0]];
      } else {
        state = [
          ...state,
          {
            teste: "Digi Pesquisado Repetido",
          },
        ];
      }

      return state;
    default:
      return state;
  }
};

export default digimonsReducer;
