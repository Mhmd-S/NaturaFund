import { useRoutes } from "react-router-dom";

import InvestorRoutes from "@/routes/investor/InvestorRoutes";

export default function InvestorRouter() {
    const routesList = [];

    Object.entries(InvestorRoutes).forEach(([key, value]) => {
        routesList.push(...value);
    });

    let element = useRoutes(routesList);

    return element;
}
