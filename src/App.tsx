import Lobby from "./components/Lobby.tsx";
import {useState} from "react";
import SessionContextProvider from "./components/SessionContexProvider.tsx";
import Game from "./components/Game.tsx";

function App() {
    const [inGame, setInGame] = useState(false);

return (
      <SessionContextProvider>
          {!inGame && <Lobby setInGame={setInGame}/>}
          {inGame && <Game/>}
      </SessionContextProvider>
  );
}

export default App;
