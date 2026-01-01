import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import CorporateGifting from "./pages/CorporateGifting";

function App() {
  const location = useLocation(); // ✅ Safe now

  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/corporate-gifting" element={<CorporateGifting />} />
    </Routes>
  );
}

export default App;
