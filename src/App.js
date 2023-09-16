import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComicList from "./components/ComicList";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<ComicList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;