import axios from "axios";
import { addDigimon } from "./action";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  axios
    .get("https://digimon-api.vercel.app/api/digimon")
    .then((Response) =>
      dispatch(addDigimon(Response.data.filter((e) => digimon === e.name)))
    );
};

export default addDigimonsThunk;
