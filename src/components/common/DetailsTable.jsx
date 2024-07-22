import React from "react";

const DetailsTable = ({ items }) => {
    return (
      <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          {Object.entries(items).map(([key, value], index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
            >
              <dt className="font-medium text-gray-900">{key}</dt>
              <dd className="text-gray-700 sm:col-span-2">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
};

export default DetailsTable;
