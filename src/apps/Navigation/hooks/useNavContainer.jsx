import react, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAppContext } from "@/context/appContext";

import useLanguage from "@/locale/useLanguage";


import useResponsive from "@/hooks/useResponsive";

const items = [
  {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: <Link to={"/"}>Dashboard</Link>,
  },
  {
      key: "home",
      icon: <CustomerServiceOutlined />,
      label: <Link to={"/home"}>Home</Link>,
  },
];

const useNavContainer = () => {
  let location = useLocation();

    const { state: stateApp, appContextAction } = useAppContext();
    const { isNavMenuClose } = stateApp;
    const { navMenu } = appContextAction;
    const [showLogoApp, setLogoApp] = useState(isNavMenuClose);
    const [currentPath, setCurrentPath] = useState(location.pathname.slice(1));

    const translate = useLanguage();
    const navigate = useNavigate();

    useEffect(() => {
        if (location)
            if (currentPath !== location.pathname) {
                if (location.pathname === "/") {
                    setCurrentPath("dashboard");
                } else setCurrentPath(location.pathname.slice(1));
            }
    }, [location, currentPath]);

    useEffect(() => {
        if (isNavMenuClose) {
            setLogoApp(isNavMenuClose);
        }
        const timer = setTimeout(() => {
            if (!isNavMenuClose) {
                setLogoApp(isNavMenuClose);
            }
        }, 200);
        return () => clearTimeout(timer);
    }, [isNavMenuClose]);
    const onCollapse = () => {
        navMenu.collapse();
    };
}

export default useNavContainer