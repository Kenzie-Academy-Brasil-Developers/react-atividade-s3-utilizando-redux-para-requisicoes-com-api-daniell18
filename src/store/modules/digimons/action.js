import { ADD_DIGIMONS } from "./actionsTypes";

export const addDigimon = (digimon, setError) => ({
  type: ADD_DIGIMONS,
  digimon,
});
