import "./App.css";
import Background from "./components/Background";
import Forground from "./components/Forground";

function App() {
  return (
    <>
      <div className="relative w-full h-full bg-zinc-800">
        <Background />
        <Forground/>
      </div>
    </>
  );
}

export default App;
