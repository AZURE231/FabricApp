import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/LogIn/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Supplier from "./pages/Supplier";
import Home from "./pages/Home";
import DetailCate from "./pages/DetailCate";
import SearchMaterial from "./pages/SearchMaterial/SearchMaterial";
import OrderReport from "./pages/OrderReport/OrderReport";

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="" exact element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/supplier" element={<Supplier />} />
                    <Route path="/home" element={<Home />} />
                    <Route
                        path="/supplier/detailCate"
                        element={<DetailCate />}
                    />
                    <Route
                        path="/searchMaterial"
                        element={<SearchMaterial />}
                    />
                    <Route path="/orderReport" element={<OrderReport />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
