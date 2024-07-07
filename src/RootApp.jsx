import "@/style/app.css";
import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import PageLoader from "@/components/PageLoader";

const LoadApp = lazy(() => import("@/components/apps/LoadApp"));

export default function RoutApp() {
    return (
        <BrowserRouter>
            {/* <AuthContextProvider> */}
                <Suspense fallback={<PageLoader />}>
                    <LoadApp />
                </Suspense>
            {/* </AuthContextProvider> */}
        </BrowserRouter>
    );
}
