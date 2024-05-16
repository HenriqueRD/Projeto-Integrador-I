import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import InfoPet from "./pages/InfoPet/InfoPet";
import CreatePet from "./pages/CreatePet/createPet";

export default function Router() {

  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/cadastrar" element={<CreatePet />} />
        <Route path="/pet/:id" element={<InfoPet />} />
      </Route>
    </Routes>
  )
}