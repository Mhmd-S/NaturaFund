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
        // {
        //   path: '/people',
        //   element: <People />,
        // },
        // {
        //   path: '/company',
        //   element: <Company />,
        // },
        // {
        //   path: '/product',
        //   element: <Product />,
        // },
        // {
        //   path: '/category/product',
        //   element: <ProductCategory />,
        // },

        // {
        //   path: '/invoice',
        //   element: <Invoice />,
        // },
        // {
        //   path: '/invoice/create',
        //   element: <InvoiceCreate />,
        // },
        // {
        //   path: '/invoice/read/:id',
        //   element: <InvoiceRead />,
        // },
        // {
        //   path: '/invoice/update/:id',
        //   element: <InvoiceUpdate />,
        // },
        // {
        //   path: '/invoice/pay/:id',
        //   element: <InvoiceRecordPayment />,
        // },
        // {
        //   path: '/quote',
        //   element: <Quote />,
        // },
        // {
        //   path: '/quote/create',
        //   element: <QuoteCreate />,
        // },
        // {
        //   path: '/quote/read/:id',
        //   element: <QuoteRead />,
        // },
        // {
        //   path: '/quote/update/:id',
        //   element: <QuoteUpdate />,
        // },
        // {
        //   path: '/payment',
        //   element: <Payment />,
        // },
        // {
        //   path: '/payment/read/:id',
        //   element: <PaymentRead />,
        // },
        // {
        //   path: '/payment/update/:id',
        //   element: <PaymentUpdate />,
        // },

        // {
        //   path: '/settings',
        //   element: <Settings />,
        // },
        // {
        //   path: '/settings/edit/:settingsKey',
        //   element: <Settings />,
        // },
        // {
        //   path: '/payment/mode',
        //   element: <PaymentMode />,
        // },
        // {
        //   path: '/taxes',
        //   element: <Taxes />,
        // },

        // {
        //   path: '/settings/advanced',
        //   element: <AdvancedSettings />,
        // },
        // {
        //   path: '/profile',
        //   element: <Profile />,
        // },
        // {
        //   path: '/lead',
        //   element: <Lead />,
        // },
        // {
        //   path: '/offer',
        //   element: <Offer />,
        // },
        // {
        //   path: '/offer/create',
        //   element: <OfferCreate />,
        // },
        // {
        //   path: '/offer/read/:id',
        //   element: <OfferRead />,
        // },
        // {
        //   path: '/offer/update/:id',
        //   element: <OfferUpdate />,
        // },
        // {
        //   path: '/expenses',
        //   element: <Expense />,
        // },
        // {
        //   path: 'category/expenses',
        //   element: <ExpenseCategory />,
        // },
    ],
};

export default routes;
