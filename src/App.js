import React, {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Switcher from "./components/Switcher";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() =>  {
    setLoading(false);
  });

  return (
    <div className="App">
      {loading ? (<Header />) :
      (<div className="main-content">
        <Topbar />
        <Navbar />
        <Outlet />
        <Footer />
        {/* <Switcher /> */}
      </div>)}
    </div>
  );
}

export default App;