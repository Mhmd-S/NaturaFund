import React from "react";
import DetailsTable from "../common/DetailsTable";

const Documents = ({ legal }) => {
    return (
        <div className="col-span-2">
            <h2 className="text-3xl py-4 font-semibold">Documents</h2>
            <DetailsTable items={legal} />
        </div>
    );
};

export default Documents;
