import DetailsTable from "@components/common/DetailsTable";

import { ExclamationTriangleIcon, CubeTransparentIcon } from "@heroicons/react/20/solid";

const Overview = ({ project }) => {
    const getCompanyDetails = () => {
        const companyDetails = project.ownedBy;
        // Remove unwanted fields
        const { userType, introduction, registeredName, _id, description, ...rest } =
            companyDetails;
        return rest;
    };

    return (
        <>
            {project.status.current == "Planning" && (
                <div className="grid grid-cols-[15%_85%] place-items-center py-4 col-span-2 border-2 border-brand-700 rounded-lg p-2">
                    <ExclamationTriangleIcon className=" text-yellow-500 row-span-2" />
                    <p className="text-center">
                        The project is in Planning stage. You, the project sponsor, are the only one
                        who can view the project details.
                    </p>
                    <p className="text-center">
                        {" "}
                        Once the project is in the Funding stage, investors will be able to view the
                        project and invest. Please keep in conact wih your account manager for more
                        information.
                    </p>
                </div>
            )}
            {/* Image */}
            {project.image ? (
                <img
                    alt=""
                    src={project.image}
                    className="inset-0 size-96 object-cover rounded-lg image-rendering:pixelated"
                />
            ) : (
                <CubeTransparentIcon className="h-96 w-96 text-gray-400" />
            )}
            {/* Description */}
            <div className="lg:py-8">
                <h2 className="text-3xl py-4 font-bold sm:text-4xl">{project.name}</h2>
                <h3>{project.type}</h3>
                <article className="space-y-4 text-gray-600">
                    <p>
                        By: <strong>{project.ownedBy.registeredName}</strong>
                    </p>
                    <p>{project.description}</p>
                </article>
            </div>
            {/* Company description */}
            <div>
                <h2 className="text-3xl py-4 font-semibold">Company Profile</h2>
                <article className="space-y-4 text-gray-600">
                    <p>{project.ownedBy.description}</p>
                </article>
            </div>
            <div>
                <h2 className="text-3xl py-4 font-semibold">Company Info</h2>
                <DetailsTable items={getCompanyDetails()} />
            </div>
        </>
    );
};

export default Overview;
