import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Messages } from "./pages/messages";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/app" element={<MainLayout />}>
                    <Route index element={<Messages />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
