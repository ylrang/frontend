import { useEffect } from "react";

export function useThemeInit() {
    useEffect(() => {
        let color = window.localStorage.getItem("color") || "blue";
        window.localStorage.setItem("color", color);
        defaultColor(color);

        let mode = window.localStorage.getItem("mode") || "light";
        defaultMode(mode);
    }, []);
};

function defaultColor(color) {
    const bootstrapStyle = document.getElementById("bootstrap-style");
    const appStyle = document.getElementById("app-style");

    if (bootstrapStyle && appStyle) {
        if (color == "green") {
            bootstrapStyle.href = "/assets/css/bootstrap.min.css";
            appStyle.href = "/assets/css/app.min.css";
        } else {
            bootstrapStyle.href = `/assets/css/bootstrap-${color}.min.css`;
            appStyle.href = `/assets/css/app-${color}.min.css`;
        }
    }
}

function defaultMode(mode) {
    if (mode == "light") {
        document.body.removeAttribute("data-layout-mode");
        localStorage.setItem("theme", "light");
    } else {
        document.body.removeAttribute("data-layout-mode", "dark");
        localStorage.setItem("theme", "dark");
    }
}