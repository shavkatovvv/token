import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export const MainLayout = () => {
    const user = Cookies.get("user");
    if (!user) {
        return <Navigate replace to={"/"} />;
    }
    return (
        <>
            <header className="py-[30px] bg-cyan-500 text-center">
                <div className="container">header</div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};
