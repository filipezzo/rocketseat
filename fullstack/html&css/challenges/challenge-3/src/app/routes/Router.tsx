import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Convite } from "../../view/pages/convite/Convite";
import { Home } from "../../view/pages/home/home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/convite" element={<Convite />} />
      </Routes>
    </BrowserRouter>
  );
}
