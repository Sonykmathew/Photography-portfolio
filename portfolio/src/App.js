import "./App.css";
import Profile from "./Profile/Profile";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Setting from "./Setting";
import Home from "./Home/Home";
import Resume from "./Resume/Resume";
import About from "./About/About";

function App() {
  return (
    <div>
      {/* react router dom */}
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio" element={<Profile />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
