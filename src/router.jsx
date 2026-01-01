import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CorporateGifting from "./pages/CorporateGifting";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/contact", element: <Contact /> },
  {
    path: "/corporate-gifting",
    element: <CorporateGifting />,
  },
  { path: "*", element: <NotFound /> },
]);
