import axios from "axios";
import { addDigimon } from "./action";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios
    .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then((Response) => dispatch(addDigimon(Response.data)))
    .catch((_) => setError(true));
};

export default addDigimonsThunk;
