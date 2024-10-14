import "@styles/app.css";
import "react-toastify/dist/ReactToastify.min.css";
import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "@context/AuthContext";
import PageLoader from "@components/PageLoader";
import { ToastContainer } from "react-toastify";

const LoadApp = lazy(() => import("@apps/LoadApp"));

export default function RouteApp() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Suspense fallback={<PageLoader />}>
                    <div className="relative">
                        <LoadApp />
                        <ToastContainer />
                    </div>
                </Suspense>
            </AuthContextProvider>
        </BrowserRouter>
    );
}
