import AppRouter from "@routes/AppRouter";
import Nav from "@modules/Nav";
import Header from "@modules/HeaderModule";
import { useAuthContext } from "@context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Toast } from "react-toastify/dist/components";

const App = () => {
    const navigate = useNavigate();

    const { state } = useAuthContext();
    const { current } = state;

    useEffect(() => {
        if (current.verified !== "verified") {
            navigate("/onboarding");
        }
    }, [current]);

    return (
        <div className="relative">
            <div className="w-screen h-screen grid grid-cols-[20%_80%] grid-flow-row divide-x divide-y">
                {current.verified == "verified" && (
                    <>
                        <Header />
                        <Nav />
                    </>
                )}
                <AppRouter />
            </div>
            <ToastContainer />
        </div>
    );
};

export default App;
