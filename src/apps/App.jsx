import AppRouter from "@/routes/AppRouter";
import Nav from "@/components/Nav";
import RotatingDisplay from "@/components/RotatingDisplay";

export default function App() {
    return (
        <div className="w-screen h-screen grid grid-cols-[17%_83%] grid-rows-[5%_95%]">
            <RotatingDisplay />
            <Nav />
            <AppRouter />
        </div>
    );
}
