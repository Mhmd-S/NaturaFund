import { lazy, Suspense, useEffect, useState } from "react";

// import { AppContextProvider } from '@/context/appContext';
import { useAuthContext } from "@/context/AuthContext";
import PageLoader from "@/components/PageLoader";
import AuthRouter from "@/routes/AuthRouter";

const App = lazy(() => import("@/apps/App"));

const DefaultApp = () => (
    // <AppContextProvider>
    <Suspense fallback={<PageLoader />}>
        <App />
    </Suspense>
    // </AppContextProvider>
);

export default function LoadApp() {
    // const { current } = useAuthContext();
    const isLoggedIn = false;

    // // Online state
    // const [isOnline, setIsOnline] = useState(navigator.onLine);

    // useEffect(() => {
    //   // Update network status
    //   const handleStatusChange = () => {
    //     setIsOnline(navigator.onLine);
    //     if (!isOnline) {
    //       console.log('🚀 ~ useEffect ~ navigator.onLine:', navigator.onLine);
    //       notification.config({
    //         duration: 20,
    //         maxCount: 1,
    //       });
    //       // Code to execute when there is internet connection
    //       notification.error({
    //         message: 'No internet connection',
    //         description: 'Cannot connect to the Internet, Check your internet network',
    //       });
    //     }
    //   };

    //   // Listen to the online status
    //   window.addEventListener('online', handleStatusChange);

    //   // Listen to the offline status
    //   window.addEventListener('offline', handleStatusChange);

    //   // Specify how to clean up after this effect for performance improvment
    //   return () => {
    //     window.removeEventListener('online', handleStatusChange);
    //     window.removeEventListener('offline', handleStatusChange);
    //   };
    // }, [navigator.onLine]);

    if (!isLoggedIn) return <AuthRouter />;
    else {
        return <DefaultApp />;
    }
}
