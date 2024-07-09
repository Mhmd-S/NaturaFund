import { Routes, Route, Navigate } from "react-router-dom";

import { AuthContextProvider } from "@/context/AuthContext";

import Landing from "@/pages/Landing";
import About from "@/pages/About";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";

// import ForgetPassword from "@/pages/ForgetPassword";
// import ResetPassword from "@/pages/ResetPassword";

export default function AuthRouter() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route element={<Landing />} path="/" />
                <Route element={<Login />} path="/login" />
                <Route element={<About />} path="/about" />
                <Route element={<Navigate to="/login" replace />} path="/logout" />
                {/* <Route element={<ForgetPassword />} path="/forgetpassword" />
            <Route element={<ResetPassword />} path="/resetpassword/:userId/:resetToken" /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthContextProvider>
    );
}
