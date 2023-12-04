import { useState } from 'react';
import './App.css';
import { guides } from "./guides";
import GuideTile from "./views/GuideTile";
import GuideView from "./views/GuideView";

function App() {
  const onClick = (guide) => {
    setSelectedGuide(guide);
  };

  const [selectedGuide, setSelectedGuide] = useState();

  return (
    <div className="App">
      <header className="App-header">
        {/** <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {selectedGuide == null ? "My guides" : selectedGuide.title}
        </p>
      </header>
      {selectedGuide == null
        ? <div className="GuidesList">
          {guides.map(guide => (
            <GuideTile key={`guide_${guide.id}`} guide={guide} onClick={onClick}></GuideTile>
          ))}
        </div>
        : <GuideView guide={selectedGuide} />}
    </div>
  );
}

export default App;
