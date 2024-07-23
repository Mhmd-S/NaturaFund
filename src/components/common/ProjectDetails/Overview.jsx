import React from "react";
import DetailsTable from "../DetailsTable";

const Overview = ({ project }) => {
    const getCompanyDetails = () => {
        const companyDetails = project.owner;
        const { description, ...rest } = companyDetails;
        return rest;
    };

    return (
        <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <img
                alt=""
                src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                className="inset-0 h-full w-full object-cover rounded-lg image-rendering:pixelated"
            />
            {/* Description */}
            <div className="lg:py-8">
                <h2 className="text-3xl py-4 font-bold sm:text-4xl">{project.name}</h2>
                <h3>{project.duration}</h3>
                <article className="space-y-4 text-gray-600">
                    <p>
                        By: <strong>{project.owner.name}</strong>
                    </p>
                    <p>{project.description}</p>
                </article>
            </div>
            {/* Company Introduction */}
            <div>
                <h2 className="text-3xl py-4 font-semibold">Company Profile</h2>
                <article className="space-y-4 text-gray-600">
                    <p>{project.owner.description}</p>
                </article>
            </div>
            <div>
                <h2 className="text-3xl py-4 font-semibold">Company Info</h2>
                <DetailsTable items={getCompanyDetails()} />
            </div>
        </div>
    );
};

export default Overview;
