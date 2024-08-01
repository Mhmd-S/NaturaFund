import AppRouter from "@/routes/AppRouter";
import Nav from "@/modules/Nav";
import Header from "@/modules/Header";

export default function App() {
    return (
        <div className="w-screen h-screen grid divide-x divide-y">
            <Header />
            <Nav className="col-span-1" />
            <AppRouter />
        </div>
    );
}
