import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function RootLayout() {
    return (
        <div>
            <header>
                <h1>Job Routes</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to={/about}>About</NavLink>
                <NavLink to={/contact}>Contact</NavLink>
            </header>
            
            <main>
                <Outlet />
            </main>
        </div>
    );
}