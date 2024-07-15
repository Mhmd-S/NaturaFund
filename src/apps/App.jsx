import AppRouter from "@/routes/AppRouter";
import Nav from "@/components/Nav";
import RotatingDisplay from "@/components/RotatingDisplay";

export default function App() {
    return (
        <div className="w-screen h-screen grid grid-cols-[15%_85%] grid-rows-[3%_97%]">
            <RotatingDisplay />
            <Nav />
            <AppRouter />
        </div>
    );
}
