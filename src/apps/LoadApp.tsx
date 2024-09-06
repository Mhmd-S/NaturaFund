import { lazy, Suspense } from "react";
import { useAuthContext } from "@/context/AuthContext";
import AuthRouter from "@/routes/AuthRouter";

const DefaultApp = lazy(() => import("@/apps/App"));

export default function LoadApp() {

    // const { isLoggedIn } = useAuth

    const isLoggedIn = false;
    if (!isLoggedIn) return <AuthRouter />;
    else {
        return <DefaultApp />;
    }
}
