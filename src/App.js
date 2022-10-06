import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Projet1 from "./pages/Projet1";
import Projet2 from "./pages/Projet2";
import Projet3 from "./pages/Projet3";
import Projet4 from "./pages/Projet4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/projet-1" element={<Projet1></Projet1>}></Route>
          <Route path="/projet-2" element={<Projet2></Projet2>}></Route>
          <Route path="/projet-3" element={<Projet3></Projet3>}></Route>
          <Route path="/projet-4" element={<Projet4></Projet4>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
