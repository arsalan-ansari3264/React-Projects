import { useState } from "react";
import Home from "./components/Home";
import Gameplay from "./components/Gameplay";


function App() {
  const [isStartedGame, setIsStartedGame] = useState(true)

  const toggleGameplay = () =>{
    setIsStartedGame((prev)=>!prev)
  }
  return (
    <>
    {isStartedGame ? <Gameplay/> : <Home  toggle={toggleGameplay}/>}
    </>
  );
}

export default App;
