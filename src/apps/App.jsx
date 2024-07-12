import AppRouter from "@/routes/AppRouter";
import Nav from "@/components/Nav";

export default function App() {
    return (
        <div className="w-screen h-screen grid grid-cols-[17%_83%] grid-rows-1">
            <Nav />
            <AppRouter />
        </div>
    );
}
