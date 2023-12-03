import './App.css';
import { guides } from "./guides";
import GuideTile from "./views/GuideTile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/** <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          My guides
        </p>
      </header>
      <div className="GuidesList">
      {guides.map(guide => (
        <GuideTile guide={guide}></GuideTile>
      ))}
      </div>
    </div>
  );
}

export default App;
