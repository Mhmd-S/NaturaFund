import AppRouter from "@/routes/AppRouter";
import Nav from "@/components/Nav";

export default function App() {
    return (
        <div className="w-screen h-screen grid grid-cols-[15%_85%] grid-rows-1">
            <Nav />
            <AppRouter />
        </div>
    );
}
