import { useRoutes } from "react-router-dom";

import SponsorRoutes from "@/routes/sponsor/SponsorRoutes";

export default function InvestorRouter() {
    const routesList = [];

    Object.entries(SponsorRoutes).forEach(([key, value]) => {
        routesList.push(...value);
    });

    let element = useRoutes(routesList);

    return element;
}
