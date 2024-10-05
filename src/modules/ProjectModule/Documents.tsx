import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import MediaTable from "@components/common/MediaTable";

const Documents = ({ documents }) => {
    return (
        <div className="col-span-2 w-1/2 justify-self-center">
            <h2 className="text-3xl py-4 font-semibold">Documents</h2>
            <MediaTable items={documents} />
        </div>
    );
};

export default Documents;
