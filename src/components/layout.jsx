import React from "react";
import Header from "./header";
import { Outlet, Link } from "react-router-dom";
import Footer from "./footer";

function Layout() {
    return (
        <>
        <Outlet />
        </>
    )
}

export default Layout