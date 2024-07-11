import AppRouter from "@/routes/AppRouter";
import Nav from "@/components/Nav";

export default function App() {
    return (
        <div className="flex ">
            <Nav />
            <AppRouter />
        </div>
    );
}
