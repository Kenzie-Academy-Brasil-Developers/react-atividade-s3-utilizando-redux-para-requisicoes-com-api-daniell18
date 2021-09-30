import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

function DigimonList({ error }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      left: "7px",
      top: "180px",
    },
    list: {
      color: "white",
      border: "5px solid black",
      padding: "10px",
    },
    controle: {
      display: "none",
    },
  }));
  const classe = useStyles();
  const digi = useSelector((state) => state.digimons);
  return (
    <>
      <div className={classe.root}>
        {digi.length === 0 ? (
          <div className={classe.controle}>""</div>
        ) : (
          <div className={classe.list}>
            <h4>Digi List:</h4>
            {digi.map((e, index) => (
              <div key={index}>{e.name}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default DigimonList;
