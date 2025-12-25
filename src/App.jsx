import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { trackPage } from "./utils/analytics";
function App() {
  const location = useLocation();

  useEffect(() => {
    trackPage(location.pathname);
  }, [location]);
  return <RouterProvider router={router} />;
}

export default App;
