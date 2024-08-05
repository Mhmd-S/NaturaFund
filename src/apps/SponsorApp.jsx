import SponsorRouter from "@/routes/sponsor";
import Nav from "@/modules/Nav";
import Header from "@/modules/Header";

export default function SponsorApp() {
    return (
        <div className="w-screen h-screen grid grid-cols-[20%_80%] grid-flow-row divide-x divide-y">
            <Header />
            <Nav />
            <SponsorRouter />
        </div>
    );
}
