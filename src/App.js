import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComicDetail from "./components/ComicDetail";
import ComicList from "./components/ComicList";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/comics" element={<ComicList />} />
          <Route exact path="/comics/:comicId" element={<ComicDetail/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;