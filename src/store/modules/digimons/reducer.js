import { ADD_DIGIMONS } from "./actionsTypes";

const digimonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DIGIMONS:
      const { digimon } = action;

      if (digimon[0]) {
        const aux = state.map((e) => e.name === digimon[0].name);

        if (!aux.includes(true)) {
          state = [...state, digimon[0]];
        } else {
          state = [
            ...state,
            {
              name: true,
            },
          ];
        }
      } else {
        state = [
          ...state,
          {
            name: false,
          },
        ];
      }
      return state;
    default:
      return state;
  }
};

export default digimonsReducer;
