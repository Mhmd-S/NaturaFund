import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "@pages/Landing";
import About from "@pages/About";
import Registeration from "@pages/Registration";
import Login from "@pages/Login";

export default function AuthRouter() {
    return (
        <Routes>
            <Route element={<Landing />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<About />} path="/about" />
            <Route element={<Navigate to="/login" replace />} path="/logout" />
            <Route element={<Registeration />} path="/registration" />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
