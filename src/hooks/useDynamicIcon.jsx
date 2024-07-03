import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DynamicIcon = ({ iconName }) => {
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        const importIcon = async () => {
            try {
                const importedIcon = await import(`@fortawesome/free-solid-svg-icons/${iconName}`);
                setIcon(importedIcon.definition);
            } catch (err) {
                console.error("Failed to import icon:", err);
            }
        };

        importIcon();
    }, [iconName]);

    if (!icon) return null;

    return <FontAwesomeIcon icon={icon} />;
};

export default DynamicIcon;
