import { lazy, Suspense, useEffect, useState } from "react";

// import { AppContextProvider } from '@/context/appContext';
import { useAuthContext } from "@/context/AuthContext";
import PageLoader from "@/components/PageLoader";
import AuthRouter from "@/routes/AuthRouter";

const InvestorApp = lazy(() => import("@/apps/InvestorApp"));
const SponsorApp = lazy(() => import("@/apps/SponsorApp"));

const renderInvestorApp = () => (
    // <AppContextProvider>
    <InvestorApp />
    // </AppContextProvider>
);

const renderSponsorApp = () => (
    // <AppContextProvider>
    <SponsorApp />
    // </AppContextProvider>
);

// const AdminApp = () => {
//     // <AppContextProvider>
//     <Suspense fallback={<PageLoader />}>
//         <SponsorApp />
//     </Suspense>;
//     // </AppContextProvider>
// };

export default function LoadApp() {
    // const { current } = useAuthContext();
    const isLoggedIn = true;

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

    const renderApp = () => {
        if (!isLoggedIn) return <AuthRouter />;
        else if (isLoggedIn == 2) {
            return renderInvestorApp();
        } else {
            return renderSponsorApp();
        }
    };

    return <Suspense fallback={<PageLoader />}>{renderApp()}</Suspense>;
}
