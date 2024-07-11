import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Drawer, Layout, Menu } from "antd";

import { useAppContext } from "@/context/appContext";

import useResponsive from "@/hooks/useResponsive";

import { useSelector } from "react-redux";
import { selectLangDirection } from "@/redux/translate/selectors";

const { Sider } = Layout;

export default function Navigation() {
    const { isMobile } = useResponsive();

    return isMobile ? <MobileSidebar /> : <Sidebar collapsible={false} />;
}

function Sidebar({ collapsible, isMobile = false }) {
    return (
        <Sider
            collapsible={collapsible}
            collapsed={collapsible ? isNavMenuClose : collapsible}
            onCollapse={onCollapse}
            className="navigation"
            width={256}
            style={{
                overflow: "auto",
                height: "100vh",
                direction: langDirection,
                position: isMobile ? "absolute" : "relative",
                bottom: "20px",
                ...(!isMobile && {
                    background: "none",
                    border: "none",
                    [langDirection === "rtl" ? "right" : "left"]: "20px",
                    top: "20px",
                    borderRadius: "8px",
                }),
            }}
            theme={"light"}
        >
            <div
                className="logo"
                onClick={() => navigate("/")}
                style={{
                    cursor: "pointer",
                }}
            >
                <img src={logoIcon} alt="Logo" style={{ marginLeft: "-5px", height: "40px" }} />

                {!showLogoApp && (
                    <img
                        src={logoText}
                        alt="Logo"
                        style={{
                            marginTop: "3px",
                            marginLeft: "10px",
                            height: "38px",
                        }}
                    />
                )}
            </div>
            <Menu
                items={items}
                mode="inline"
                theme={"light"}
                selectedKeys={[currentPath]}
                style={{
                    background: "none",
                    border: "none",
                    width: 256,
                }}
            />
        </Sider>
    );
}

function MobileSidebar() {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const langDirection = useSelector(selectLangDirection);
    return (
        <>
            <Button
                type="text"
                size="large"
                onClick={showDrawer}
                className="mobile-sidebar-btn"
                style={{ [langDirection === "rtl" ? "marginRight" : "marginLeft"]: 25 }}
            >
                <MenuOutlined style={{ fontSize: 18 }} />
            </Button>
            <Drawer
                width={250}
                contentWrapperStyle={{
                    boxShadow: "none",
                }}
                style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
                placement={langDirection === "rtl" ? "right" : "left"}
                closable={false}
                onClose={onClose}
                open={visible}
            >
                <Sidebar collapsible={false} isMobile={true} />
            </Drawer>
        </>
    );
}
