import DetailsTable from "@components/common/DetailsTable";

const Overview = ({ project }) => {
    // const getCompanyDetails = () => {
    //     const companyDetails = project.ownedBy;
    //     // Remove unwanted fields
    //     const { description, ...rest } = companyDetails;
    //     return rest;
    // };

    return (
        <>
            {/* Image */}
            <img
                alt=""
                src={project.image}
                className="inset-0 h-full w-full object-cover rounded-lg image-rendering:pixelated"
            />
            {/* Description */}
            <div className="lg:py-8">
                <h2 className="text-3xl py-4 font-bold sm:text-4xl">{project.name}</h2>
                <h3>{project.type}</h3>
                <article className="space-y-4 text-gray-600">
                    <p>
                        By: <strong>{project.ownedBy}</strong>
                    </p>
                    <p>{project.description}</p>
                </article>
            </div>
            {/* Company Introduction */}
            <div>
                <h2 className="text-3xl py-4 font-semibold">Company Profile</h2>
                <article className="space-y-4 text-gray-600">
                    {/* <p>{project.ownedBy.description}</p> */}
                </article>
            </div>
            <div>
                <h2 className="text-3xl py-4 font-semibold">Company Info</h2>
                {/* <DetailsTable items={getCompanyDetails()} /> */}
            </div>
        </>
    );
};

export default Overview;
