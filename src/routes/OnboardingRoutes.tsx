import { Routes, Route, Navigate } from "react-router-dom";

import Onboarding from "@/pages/Landing";

// import ForgetPassword from "@/pages/ForgetPassword";
// import ResetPassword from "@/pages/ResetPassword";

export default function OnboardingRouter() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route element={<Landing />} path="/" />
                <Route element={<Login />} path="/login" />
                <Route element={<About />} path="/about" />
                <Route element={<Navigate to="/login" replace />} path="/logout" />
                <Route element={<Registeration />} path="/registration" />
                {/* <Route element={<ForgetPassword />} path="/forgetpassword" />
            <Route element={<ResetPassword />} path="/resetpassword/:userId/:resetToken" /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthContextProvider>
    );
}
