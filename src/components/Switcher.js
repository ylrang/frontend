import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { themeColor, isDarkMode } from "../atoms";


const Switcher = () => {
    const [visible, setVisible] = useState(false);
    const [color, setColor] = useRecoilState(themeColor);
    const [darkMode, setDarkMode] = useRecoilState(isDarkMode);
    const [changed, setChanged] = useState(false)
    const changeColor = (newColor) => {
        if(color === newColor) return;
        setColor(newColor);
        console.log("Change theme color:", newColor);
        window.localStorage.setItem("color", newColor);


        const bootstrapStyle = document.getElementById("bootstrap-style");
        const appStyle = document.getElementById("app-style");
        
        if (bootstrapStyle && appStyle) {
            if (newColor == "green") {
                bootstrapStyle.href = "/assets/css/bootstrap.min.css";
                appStyle.href = "/assets/css/app.min.css";
            } else {
                bootstrapStyle.href = `/assets/css/bootstrap-${newColor}.min.css`;
                appStyle.href = `/assets/css/app-${newColor}.min.css`;
            }
            console.log("bootstrap-style:", bootstrapStyle.href);
            console.log("app-style:", appStyle.href);
        }
    };

    const changeMode = () => {
        setDarkMode((prev) => !prev);
        console.log("Change theme mode:", !darkMode ? "light": "dark");
        if (!darkMode) {
            document.body.setAttribute("data-layout-mode", "dark");
            localStorage.setItem("mode", "dark");
        }
        else {
            document.body.removeAttribute("data-layout-mode");
            localStorage.setItem("mode", "light");
        }
    };

    const toggleSwitcher = () => {
        setVisible(!visible);
    }
    return (
        <div id="style-switcher" onClick={toggleSwitcher} style={{left: visible ? "-0px" : "-165px"}}>
            <div>
                <h6>Select your color</h6>
                <ul className="pattern list-unstyled mb-0">
                    <li>
                        <a className="color-list color1" href="javascript: void(0);" onClick={() => changeColor("green")}></a>
                    </li>
                    <li>
                        <a className="color-list color2" href="javascript: void(0);" onClick={() => changeColor("blue")}></a>
                    </li>
                    <li>
                        <a className="color-list color3" href="javascript: void(0);" onClick={() => changeColor("purple")}></a>
                    </li>
                </ul>
                <div className="mt-3">
                    <h6>Light/dark Layout</h6>
                    <div className="text-center mt-3">
                        <a href="javascript: void(0);" id="mode" className="mode-btn text-white rounded-3" onClick={changeMode}>
                            <i className="uil uil-brightness mode-dark mx-auto"></i>
                            <i className="uil uil-moon mode-light"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bottom d-none d-md-block">
                <a href="javascript: void(0);" className="settings rounded-end"><i className="mdi mdi-cog mdi-spin"></i></a>
            </div>
        </div>
    )
}

export default Switcher;