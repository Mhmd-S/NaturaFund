import React from "react";

const Overview = ({ project }) => {
    return (
        <section>
            <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                            className="absolute inset-0 h-full w-full object-cover rounded-lg"
                        />
                    </div>

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
                </div>
            </div>
        </section>
    );
};

export default Overview;
