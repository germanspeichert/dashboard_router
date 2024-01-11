import { Routes, Route, HashRouter } from "react-router-dom";
import Temperature from "./pages/Temperature";
import Radiation from "./pages/Radiation";
import Wind from "./pages/Wind";
import Home from "./pages/Home";
import All from "./pages/All";
import MyAppBar from "./components/MyAppBar";


function App() {
  return (
    <>
      <MyAppBar/>
      <HashRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="temperature" element={<Temperature/>} />
            <Route path="radiation" element={<Radiation/>} />
            <Route path="wind" element={<Wind/>} />
            <Route path="all" element={<All/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

/*

// import logo from './logo.svg';
// import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/
