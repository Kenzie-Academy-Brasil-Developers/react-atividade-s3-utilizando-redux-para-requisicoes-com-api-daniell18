import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

function Digimons({ error }) {
  const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "5vh",
    },
    Paper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      flexDirection: "column",
      backgroundColor: "white",
      border: "3px solid black",
      borderRadius: "20px",
    },
    img: {
      borderRadius: "20px",
      width: "150px",
      height: "150px",
    },
  }));
  const classe = useStyles();
  const digi = useSelector((state) => state.digimons);
  console.log(digi);
  return (
    <>
      <div className={classe.root}>
        {digi.length > 0 ? (
          digi[digi.length - 1].repetido ? (
            <h3>{digi[digi.length - 1].repetido}</h3>
          ) : (
            <section className={classe.Paper}>
              <img
                className={classe.img}
                src={digi[digi.length - 1].img}
                alt={digi[digi.length - 1].name}
              />
              <div>{digi[digi.length - 1].name}</div>
              <div>{digi[digi.length - 1].level}</div>
            </section>
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default Digimons;
