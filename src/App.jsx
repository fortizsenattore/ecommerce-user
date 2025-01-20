import "./App.css";
import Footer from "./components/Footer";
import NavbarTop from "./components/NavbarTop";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div>
        <NavbarTop />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
