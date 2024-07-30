import React from "react";
import NavItem from "@/modules/Nav/NavItem";

const NavSection = ({ items, location }) => {
    return (
        <div className="p-2">
            <ul className="space-y-1">
                {items.map((item) => {
                    return <NavItem item={item} location={location} />;
                })}
            </ul>
        </div>
    );
};

export default NavSection;
