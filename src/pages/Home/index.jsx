import React from "react";
import Revenue from "@/components/Home/Revenue";
import Portofolio from "@/components/Home/Portofolio";
import Projects from "@/components/Home/Projects";
import News from "@/components/Home/News";
import ProjectDetails from "@/components/ProjectDetails";
import useHome from "@/pages/Home/useHome";

const Home = () => {
    const { projectInfo, setProjectInfo } = useHome();

    return (
        <>
            {projectInfo ? (
                <ProjectDetails projectInfo={projectInfo} setProjectInfo={setProjectInfo} />
            ) : (
                <div className="w-full h-full p-2 grid grid-cols-[65%_35%] grid-rows-2">
                    <Revenue />
                    <Portofolio />
                    <Projects setProjectInfo={setProjectInfo} />
                    <News />
                </div>
            )}
        </>
    );
};

export default Home;
