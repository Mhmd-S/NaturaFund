import React, { useState } from "react";

const useHome = () => {
    const [projectInfo, setProjectInfo] = useState(null);

    return { projectInfo, setProjectInfo };
};

export default useHome;
