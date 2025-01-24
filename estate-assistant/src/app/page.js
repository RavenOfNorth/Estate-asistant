"use client"

import Header from "@/app/components/Header/Header";
import Calculator from "@/app/components/Calculator/Calculator";
import Login from "@/app/pages/loginPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";




export default function Main() {

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Calculator />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/feedback" element={<Calculator />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}