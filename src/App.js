import { useState } from 'react';
import './App.css';
import { guides } from "./guides";
import GuideView from "./views/GuideView";

function App() {
  const onItemSelected = (guide) => {
    setSelectedGuide(guide);
    history.unshift(guide);
    setHistory(history);
  };

  const onBack = () => {
    history.shift();
    setHistory(history);
    setSelectedGuide(history[0]);
  };

  const [selectedGuide, setSelectedGuide] = useState();
  const [history, setHistory] = useState([]);

  return (
    <div className="App">
      <header className="AppHeader">
        {history.length == 0 ? null
          : <div className="BackButton" onClick={onBack}>
            <svg aria-label="Back" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Back</title><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path></svg>
          </div>
        }
        <p>
          {selectedGuide == null ? "My guides" : selectedGuide.title}
        </p>
        {history.length == 0
          ? null
          : <div className="SpaceFillter" />}
      </header>
      <div className="GuidesList">
        <GuideView parentGuideId={selectedGuide?.id} guides={selectedGuide != null ? (selectedGuide.guides ?? []) : guides} posts={selectedGuide?.posts ?? []} onItemSelected={onItemSelected} />
      </div>
    </div>
  );
}

export default App;
