import React, {useState, useEffect} from "react";
import { Routes, Route  } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./AppRoutes";
import { useThemeInit } from "./hooks/useThemeInit";

function App() {
  // const [loading, setLoading] = useState(true)
  
  useEffect(() =>  {
    // 로딩 스피너 표시
    // setTimeout(() => {
    //   setLoading(false);
    // }, 500);
    
    // 초기 테마 색상/모드 설정
    const color = localStorage.getItem("color") || "green";
    const mode = localStorage.getItem("mode") || "light";
    
    document.body.setAttribute("data-theme", color);
    const bootstrapStyle = document.getElementById("bootstrap-style");
    const appStyle = document.getElementById("app-style");
    const getLink = (type, color) =>
    color === "green"
      ? `/assets/css/${type}.min.css`
      : `/assets/css/${type}-${color}.min.css`;

  if (bootstrapStyle && appStyle) {
      bootstrapStyle.href = getLink("bootstrap", color);
      appStyle.href = getLink("app", color);
  }
  if (mode === "dark") {
      document.body.setAttribute("data-layout-mode", "dark");
  } else {
    document.body.removeAttribute("data-layout-mode");
  }
  }, []);

  return (
    <div className="App">
      {/* {loading ? (<Header />) : */}
      <AppRoutes />
    </div>
    
  );
}

export default App;