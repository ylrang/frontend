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
import Profile from "./pages/Profile";
import FEPList from "./pages/FEPList";
import Brnc from "./pages/Brnc";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<RndLayout />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/kinsdb" element={<KinsDB />}></Route>
                <Route path="/brnc" element={<Brnc />}></Route>
                <Route path="/fep-list" element={<FEPList />}></Route>
                <Route path="/regulation" element={<RegInfo />}></Route>
                <Route path="/regulation/:id" element={<RegInfoDetail />}></Route>
                <Route path="/institute" element={<Institute />}></Route>
            </Route>
            {/* <Route element={<SubLayout />}>
                <Route path="/detail/:id" element={<Detail />}></Route>
                <Route path="/character/:id" element={<CharacterInfo />}></Route>
            </Route> */}
            {/*<Route component={NotFound} />*/}
            <Route element={<MainLayout />}>
                <Route path= "/profile" element={<Profile />}></Route>
            </Route>
        </Routes>
    )
}
export default AppRoutes;