import React from "react";
import useDynamicIcon from "@/hooks/useDynamicIcon";

const SubPoint = ({ iconName, text }) => {
  
    const icon = useDynamicIcon(iconName);

    return (
        <div>
            {icon}
            <p>{text}</p>
        </div>
    );
};

export default SubPoint;
