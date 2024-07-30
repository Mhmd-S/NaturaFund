import React from "react";
import EmptyState from "@/components/common/EmptyState";
import { faBank } from "@fortawesome/free-solid-svg-icons";

const PaymentDetails = () => {
    return (
        <div className="w-full">
            <EmptyState
                title={"No Bank Accounts"}
                description="Please add a bank account to receive payments."
                icon={faBank}
                buttonLabel="Add Bank Account"
                handleClick={() => console.log("Add Bank Account")}
            />
        </div>
    );
};

export default PaymentDetails;
