import { Button, makeStyles } from "@material-ui/core";
import { useState } from "react";

import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";

const Search = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "#C03C04",
    },
    button: {
      backgroundColor: "#51DBC9",
      fontWeight: "bold",
      borderRadius: "10px",
      marginLeft: "10px",
    },
    textField: {
      display: "flex",
    },
    input: {
      height: "32px",
      width: "160px",
      borderRadius: "10px",
    },
    titulo: {
      color: "white",
    },
  }));

  const classe = useStyles();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  // const [error, setError] = useState(false);
  const handleClick = () => {
    dispatch(addDigimonsThunk(input));
  };

  return (
    <div className={classe.root}>
      <h2 className={classe.titulo}>Procure pelo seu Digimon!</h2>

      <div className={classe.textField}>
        <input
          className={classe.input}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Procure seu Digimon"
        ></input>
        <Button
          className={classe.button}
          variant="contained"
          onClick={() => handleClick()}
        >
          Pesquisar
        </Button>
      </div>
    </div>
  );
};

export default Search;
