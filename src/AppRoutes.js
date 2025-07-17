import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'

import MainLayout from "./layout/MainLayout";
import RndLayout from "./layout/RndLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import KinsDB from "./pages/KinsDB";
import RegInfo from "./pages/RegInfo";
import RegInfoDetail from "./pages/RegInfoDetail";
import Institute from "./pages/Institute";
import Profile from "./pages/auth/Profile";
import FEPDocs from "./pages/FEPDocs";
import Brnc from "./pages/Brnc";
import RegDocs from "./pages/RegDocs";
import FEPList from "./pages/FEPList";
import FEPUpdate from "./pages/FEPUpdate";
import Unist from "./pages/Unist";
import Report from "./pages/Report";
import FEPDB from "./pages/FEPDB";
import Register from "./pages//auth/Register";
import FEPLog from "./pages/FEPLog";
import FEPLogDetail from "./pages/FEPLogDetail";
import AuthMiddleware from "./middleware/Auth";
import PersistLogin from "./components/PersistLogin";
import Login from "./pages//auth/Login";
import RegisterSuccess from "./pages/auth/RegisterSuccess";

const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route element={<PersistLogin />}> */}
                <Route path='auth'>
                    <Route path='login' element={<Login />}></Route>
                    <Route path='register' element={<Register />}></Route>
                    <Route path='register-success' element={<RegisterSuccess />}></Route>
                    {/* <Route path='profile' element={<AuthMiddleware />}>
                        <Route index element={<Profile />}></Route>
                    </Route> */}
                </Route>
                <Route path="/" element={<RndLayout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="kinsdb" element={<KinsDB />}></Route>
                    <Route path="brnc" element={<Brnc />}></Route>
                    <Route path="regdocs-list" element={<RegDocs />}></Route>
                    <Route path="unist" element={<Unist />}></Route>
                    <Route path="report/:id" element={<Report />}></Route>
                    
                    {/* <Route path="fepdb" element={<AuthMiddleware/>}>
                        <Route index element={<FEPDB />}></Route>
                        <Route path="docs" element={<FEPList />}></Route>
                        <Route path="docs/:id" element={<FEPDocs />}></Route>
                        <Route path="docs-update/:id" element={<FEPUpdate />}></Route>
                        <Route path="docs/:fepId/log" element={<FEPLog />}></Route>
                        <Route path="docs/:fepId/log/:id" element={<FEPLogDetail />}></Route>
                    </Route> */}
                    
                    <Route path="regulation" element={<RegInfo />}></Route>
                    <Route path="regulation/:id" element={<RegInfoDetail />}></Route>
                    <Route path="institute" element={<Institute />}></Route>
                </Route>
            {/* </Route> */}
        </Routes>
    )
}
export default AppRoutes;