import React from "react";

const PersonalDetails = () => {
    return (
        <div className="px-40">
            <div className="px-4 sm:px-0">
                <h3 className="text-2xl font-semibold">Personal Information</h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Margot Foster
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                            Date of Birth
                        </dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            31/12/2002
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            31, Subnag Jaya, Kuala Lumpur, Malaysia
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Nationality</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Malaysian
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Phone</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            +60 1 8 2975619
                        </dd>
                    </div>

                </dl>
            </div>
        </div>
    );
};

export default PersonalDetails;
