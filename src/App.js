import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GetApi from "./Components/GetApi";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GetApi />}></Route>
      </Routes>
    </div>
  );
}

export default App;
