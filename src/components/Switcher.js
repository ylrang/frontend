// import React, { useEffect } from "react";
// import ''
// const Switcher = () => {

//     const basePath = '/assets/css/';


//     function setColor(theme) {
//         if (theme == 'green' || theme == null) {
//             document.getElementById('bootstrap-style').href = `${basePath}/bootstrap.min.css`;
//             document.getElementById('app-style').href = `${basePath}/app.min.css`;
//         }
//         else {
//             document.getElementById('bootstrap-style').href = `${basePath}bootstrap-${theme}`;
//             document.getElementById('app-style').href = `${basePath}app-${theme}.min.css`;
//         }
//         window.localStorage.removeItem('color');
//         window.localStorage.setItem("color", theme);
//     };

//     function setMode(e) {
//         var theme = localStorage.getItem('theme') || 'light';
//         if (theme == "light" || theme == null) {
//             document.documentElement.setAttribute("data-layout-mode", "dark");
//             localStorage.setItem("theme", "dark");
//             window.localStorage.removeItem('mode');
//             window.localStorage.setItem("mode", 'dark');
//         }
//         else {
//             document.body.removeAttribute("data-layout-mode");
//             localStorage.setItem("theme", "light");
//             window.localStorage.removeItem('mode');
//             window.localStorage.setItem("mode", 'light');
//         }
//         }
//     }
    
//     useEffect(()=> {
//         var color = localStorage.getItem('color') || 'blue';
//         var mode = localStorage.getItem('mode') || 'light';
//     })
//     return (
//         <div id="style-switcher" onclick="toggleSwitcher()" style={{left: "-165px"}}>
//             <div>
//                 <h6>Select your color</h6>
//                 <ul className="pattern list-unstyled mb-0">
//                     <li>
//                         <a className="color-list color1" href="javascript: void(0);" onClick=setColorGreen()"></a>
//                     </li>
//                     <li>
//                         <a className="color-list color2" href="javascript: void(0);" onClick="setColor('blue')"></a>
//                     </li>
//                     <li>
//                         <a className="color-list color3" href="javascript: void(0);" onClick="setColor('green')"></a>
//                     </li>
//                 </ul>
//                 <div className="mt-3">
//                     <h6>Light/dark Layout</h6>
//                     <div className="text-center mt-3">
//                         <a href="javascript: void(0);" id="mode" className="mode-btn text-white rounded-3">
//                             <i className="uil uil-brightness mode-dark mx-auto"></i>
//                             <i className="uil uil-moon mode-light"></i>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div className="bottom d-none d-md-block">
//                 <a href="javascript: void(0);" className="settings rounded-end"><i className="mdi mdi-cog mdi-spin"></i></a>
//             </div>
//         </div>
//     )
// }

// export default Switcher;