import { lazy } from "react";

import { Navigate } from "react-router-dom";

// const Logout = lazy(() => import('@/pages/Logout.jsx'));
// const NotFound = lazy(() => import('@/pages/NotFound.jsx'));

// const Dashboard = lazy(() => import('@/pages/Dashboard'));
// const Customer = lazy(() => import('@/pages/Customer'));
// const Invoice = lazy(() => import('@/pages/Invoice'));
// const InvoiceCreate = lazy(() => import('@/pages/Invoice/InvoiceCreate'));

// const InvoiceRead = lazy(() => import('@/pages/Invoice/InvoiceRead'));
// const InvoiceUpdate = lazy(() => import('@/pages/Invoice/InvoiceUpdate'));
// const InvoiceRecordPayment = lazy(() => import('@/pages/Invoice/InvoiceRecordPayment'));
// const Quote = lazy(() => import('@/pages/Quote/index'));
// const QuoteCreate = lazy(() => import('@/pages/Quote/QuoteCreate'));
// const QuoteRead = lazy(() => import('@/pages/Quote/QuoteRead'));
// const QuoteUpdate = lazy(() => import('@/pages/Quote/QuoteUpdate'));
// const Payment = lazy(() => import('@/pages/Payment/index'));
// const PaymentRead = lazy(() => import('@/pages/Payment/PaymentRead'));
// const PaymentUpdate = lazy(() => import('@/pages/Payment/PaymentUpdate'));

// const Settings = lazy(() => import('@/pages/Settings/Settings'));
// const PaymentMode = lazy(() => import('@/pages/PaymentMode'));
// const Taxes = lazy(() => import('@/pages/Taxes'));
// const AdvancedSettings = lazy(() => import('@/pages/AdvancedSettings'));
// const Profile = lazy(() => import('@/pages/Profile'));
// const Lead = lazy(() => import('@/pages/Lead/index'));
// const Offer = lazy(() => import('@/pages/Offer/index'));
// const OfferCreate = lazy(() => import('@/pages/Offer/OfferCreate'));
// const OfferRead = lazy(() => import('@/pages/Offer/OfferRead'));
// const OfferUpdate = lazy(() => import('@/pages/Offer/OfferUpdate'));

// const ExpenseCategory = lazy(() => import('@/pages/ExpenseCategory'));
// const Expense = lazy(() => import('@/pages/Expense'));
// const ProductCategory = lazy(() => import('@/pages/ProductCategory'));
// const Product = lazy(() => import('@/pages/Product'));

// const People = lazy(() => import('@/pages/People'));
// const Company = lazy(() => import('@/pages/Company'));

// const About = lazy(() => import('@/pages/About'));

const Portfolio = lazy(() => import("@/pages/Portfolio"));
const Home = lazy(() => import("@/pages/Home"));
const Explore = lazy(() => import("@/modules/Explore"));
const Project = lazy(() => import("@/pages/Project"));
const Profile = lazy(() => import("@/pages/Profile"));
const InvestorHelp = lazy(() => import("@/pages/Help/InvestorHelp"));
const Sponsor = lazy(()=> import("@/pages/Sponsor"));

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
            path: "/project",
            element: <Project />,
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
            path: "/sponsor",
            element: <Sponsor/>
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
        // {
        //   path: '*',
        //   element: <NotFound />,
        // },
    ],
};

export default routes;
