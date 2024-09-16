import Onboarding from "@pages/Onboarding";
import { lazy } from "react";

import { Navigate } from "react-router-dom";

const Portfolio = lazy(() => import("@pages/Portfolio"));
const Home = lazy(() => import("@pages/Home"));
const Explore = lazy(() => import("@pages/Explore"));
const Project = lazy(() => import("@pages/Project"));
const Profile = lazy(() => import("@pages/Profile"));
const InvestorHelp = lazy(() => import("@pages/Help/InvestorHelp"));
const Investee = lazy(() => import("@pages/Investee"));
const ProjectApply = lazy(() => import("@pages/Project/ProjectApply"));
const NotFound = lazy(() => import("@pages/NotFound"));

let routes = {
    expense: [],
    default: [
        {
            path: "/login",
            element: <Navigate to="/" />,
        },
        {
            path: "/verify/*",
            element: <Navigate to="/" />,
        },
        {
            path: "/resetpassword/*",
            element: <Navigate to="/" />,
        },
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
            path: "/portfolio",
            element: <Portfolio />,
        },
        {
            path: "/explore",
            element: <Explore />,
        },
        {
            path: '/project/:id',
            element: <Project />,
          },
        {
            path: "/project/apply",
            element: <ProjectApply />,
        },
        {
            path: "/profile",
            element: <Profile />,
        },
        {
            path: "/help",
            element: <InvestorHelp />,
        },
        {
            path: "/investee",
            element: <Investee />,
        },
        {
            path: "/onboarding",
            element: <Onboarding />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ],
};

export default routes;
