
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./views/home";

function App() {
  return (
    <div>
   {/*  NavBar  */}

   {/* Routes */}
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
  );
}

export default App;
