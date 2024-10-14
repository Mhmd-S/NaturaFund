import React from "react";
import { useAuthContext } from "@context/AuthContext";
import { normalizeCamelCase } from "@utils/extractHeader";

const PersonalDetails = () => {
    const { state } = useAuthContext();

    const renderUserInfo = () => {
        let userInfo = state.current;

        if (state.current.userType === "Corporation") {
            const representative = JSON.parse(userInfo.representative);

            userInfo = {
                ...userInfo,
                ...representative,
            };

            delete userInfo.representative;
        }

        const {
            _id,
            password,
            userType,
            verified,
            createdAt,
            updatedAt,
            __v,
            addressProof,
            bankAccount,
            businessLicense,
            frontId,
            backId,
            selfieId,
            suspended,
            ...rest
        } = userInfo;

        let userEntries = Object.entries(rest);

        return userEntries.map(([key, value]) => {
            if (key == "incorporationDate") value = value.split("T")[0];
            return (
                <div key={key} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                        {normalizeCamelCase(key)}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        {value}
                    </dd>
                </div>
            );
        });
    };

    return (
        <div>
            <h2 className="text-3xl py-4 font-semibold">Personal Information</h2>
            <div className="border-t border-gray-100">
                <dl className="divide-y divide-gray-100">{renderUserInfo()}</dl>
            </div>
        </div>
    );
};

export default PersonalDetails;
