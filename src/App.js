import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComicDetail from "./components/ComicDetail";
import ComicList from "./components/ComicList";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<ComicList />} />
          <Route exact path="/comics/:comicId" element={<ComicDetail/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;