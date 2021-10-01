import "./App.css";

import Search from "./components/Search";
import Digimons from "./components/Digimons";
import DigimonList from "./components/DigimonList";
import { makeStyles } from "@material-ui/core";
function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
      backgroundColor: "#C03C04",
    },
    body: {
      display: "flex",
      justifyContent: "center",
    },
  }));
  const classe = useStyles();
  return (
    <div className={classe.root}>
      <Search />
      <div className={classe.body}>
        <DigimonList />
        <Digimons />
      </div>
    </div>
  );
}

export default App;
