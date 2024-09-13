import AppRouter from "@routes/AppRouter";
import Nav from "@modules/Nav";
import Header from "@modules/HeaderModule";
import { useAuthContext } from "@context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
    const navigate = useNavigate();

    const { state } = useAuthContext();
    const { current } = state;

    useEffect(() => {
        if (!current.verified) {
            navigate("/onboarding");
        }
    }, [current]);

    return (
        <div className="w-screen h-screen grid grid-cols-[20%_80%] grid-flow-row divide-x divide-y">
            {current.verified && (
                <>
                    <Header />
                    <Nav />
                </>
            )}
            <AppRouter />
        </div>
    );
};

export default App;
