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
      backgroundColor: "#C03C04",
    },
    Paper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "5vh",
      flexDirection: "column",
      backgroundColor: "white",
      border: "3px solid black",
      borderRadius: "20px",
      marginLeft: "100px",
    },
    img: {
      borderRadius: "20px",
      width: "150px",
      height: "150px",
    },
    txt: {
      fontWeight: "bold",
    },
  }));
  const classe = useStyles();
  const digi = useSelector((state) => state.digimons);
  console.log(digi, error);
  return (
    <>
      <div className={classe.root}>
        {digi.length > 0 ? (
          digi[digi.length - 1].name === false ? (
            <div className={classe.root}>
              <h1>Digi nao econtrado</h1>
            </div>
          ) : (
            <div className={classe.root}>
              {digi[digi.length - 1].name === true ? (
                <h1>Digi Repetido</h1>
              ) : (
                <div className={classe.Paper}>
                  <img
                    className={classe.img}
                    src={digi[digi.length - 1].img}
                    alt={digi[digi.length - 1].name}
                  />
                  <div className={classe.txt}>{digi[digi.length - 1].name}</div>
                  <div className={classe.txt}>
                    {digi[digi.length - 1].level}
                  </div>
                </div>
              )}
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default Digimons;
