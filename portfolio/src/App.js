import "./App.css";
import Profile from "./Profile";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Setting from "./Setting";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Profile />}></Route>
          <Route path="/settings" element={<Setting />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
