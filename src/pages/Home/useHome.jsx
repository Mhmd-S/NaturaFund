import React, { useState } from "react";

const useHome = () => {
    const [showModal, setShowModal] = useState(false);
    const [projectInfo, setProjectInfo] = useState({});

    return { showModal, setShowModal, projectInfo, setProjectInfo };
};

export default useHome;
