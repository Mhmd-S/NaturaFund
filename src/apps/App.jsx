import AppRouter from "@/routes/AppRouter";
import Nav from "@/modules/Nav";

export default function App() {
    return (
        <div className="w-screen h-screen flex">
            <Nav />
            <AppRouter />
        </div>
    );
}
