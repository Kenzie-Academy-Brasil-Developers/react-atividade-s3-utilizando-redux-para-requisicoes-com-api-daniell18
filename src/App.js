import "./App.css";

import Search from "./components/Search";
import Digimons from "./components/Digimons";
import DigimonList from "./components/DigimonList";
function App() {
  return (
    <div className="App">
      <Search />
      <Digimons />
      <DigimonList />
    </div>
  );
}

export default App;
